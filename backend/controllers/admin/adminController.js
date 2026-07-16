const User = require("../../models/auth/User");
const JobApplication = require("../../models/JobApplication");

// @desc    Get all users (paginated + filtered) for admin dashboard
// @route   GET /api/admin/users
// @access  Private/Admin
exports.getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;
    const search = req.query.search || "";
    const roleFilter = req.query.role || "All";
    const statusFilter = req.query.status || "All";

    // Build Query
    let query = {};
    
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { username: { $regex: search, $options: "i" } }
      ];
    }
    
    if (roleFilter !== "All") {
      // Frontend sends "ADMIN", "USER", etc.
      query.role = roleFilter.toLowerCase() === "admin" ? "admin" : "student";
    }
    
    if (statusFilter !== "All") {
      query.isDeactivated = statusFilter === "Suspended";
    }

    // Get total filtered count for pagination
    const totalFiltered = await User.countDocuments(query);

    // Get paginated users
    const users = await User.find(query)
      .select("-passwordHash")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total stats (across all users)
    const totalUsers = await User.countDocuments({});
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const totalSuspended = await User.countDocuments({ isDeactivated: true });
    
    // Attempt to get app count for each user to show in the table
    // We can run a small Promise.all since limit is small (e.g. 12)
    const formattedUsers = await Promise.all(users.map(async (u) => {
      const appsCount = await JobApplication.countDocuments({ userId: u._id });
      
      return {
        id: u._id.toString(),
        initials: ((u.firstName?.[0] || "") + (u.lastName?.[0] || "")).toUpperCase(),
        imgUrl: u.profilePicture || "",
        name: (`${u.firstName} ${u.lastName}`.trim()) || u.username,
        email: u.email,
        role: u.role === "admin" ? "ADMIN" : "USER",
        status: u.isDeactivated ? "Suspended" : "Active",
        apps: appsCount,
        roadmap: u.careerGoal || "—",
        joined: new Date(u.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        lastActive: "Recently", // Placeholder
        avatarColor: u.role === "admin" ? "bg-violet-600/20 text-violet-400" : "bg-emerald-500/20 text-emerald-400",
      };
    }));

    res.status(200).json({
      success: true,
      data: formattedUsers,
      pagination: {
        total: totalFiltered,
        page,
        pages: Math.ceil(totalFiltered / limit)
      },
      stats: {
        total: totalUsers,
        pro: 0, // Placeholder
        free: totalUsers - totalAdmins, // Using non-admin as 'free' for now
        suspended: totalSuspended
      }
    });

  } catch (error) {
    console.error("Error in getUsers:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// @desc    Get detailed user profile data (apps, roadmaps, activity)
// @route   GET /api/admin/users/:id/profile
// @access  Private/Admin
const RoadmapProgress = require("../../models/RoadmapProgress");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-passwordHash").lean();
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Fetch Job Applications
    const applications = await JobApplication.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .lean();

    // Fetch Roadmaps
    const roadmaps = await RoadmapProgress.find({ userId: user._id })
      .sort({ lastUpdated: -1 })
      .lean();

    // Activity could be derived from createdAt of apps, roadmaps, or user lastLogin (if tracked)
    // For now, we'll build a simple activity array from their apps and roadmaps
    const activity = [];
    activity.push({
      id: "joined",
      type: "account",
      title: "Account created",
      date: user.createdAt,
      icon: "workspace_premium",
      color: "text-purple-500"
    });
    
    applications.forEach(app => {
      activity.push({
        id: `app_${app._id}`,
        type: "application",
        title: `Applied to ${app.company} for ${app.role}`,
        date: app.createdAt,
        icon: "work",
        color: "text-orange-500"
      });
    });

    roadmaps.forEach(rm => {
      activity.push({
        id: `rm_${rm._id}`,
        type: "roadmap",
        title: `Started roadmap: ${rm.roadmapId}`,
        date: rm.lastUpdated || rm.createdAt || new Date(),
        icon: "flag",
        color: "text-[#00daf3]"
      });
    });

    // Sort activity by date descending
    activity.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.status(200).json({
      success: true,
      data: {
        applications,
        roadmaps,
        activity: activity.slice(0, 20) // Only send latest 20 activities
      }
    });
  } catch (error) {
    console.error("Error in getUserProfile:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// @desc    Toggle suspend status of a user
// @route   PUT /api/admin/users/:id/suspend
// @access  Private/Admin
exports.suspendUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    
    // Prevent suspending self
    if (user._id.toString() === req.user.id) {
      return res.status(400).json({ success: false, error: "You cannot suspend yourself" });
    }

    user.isDeactivated = !user.isDeactivated;
    await user.save();

    res.status(200).json({ 
      success: true, 
      message: `User ${user.isDeactivated ? 'suspended' : 'activated'} successfully`,
      isDeactivated: user.isDeactivated
    });
  } catch (error) {
    console.error("Error in suspendUser:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// @desc    Delete a user permanently
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    
    // Prevent deleting self
    if (user._id.toString() === req.user.id) {
      return res.status(400).json({ success: false, error: "You cannot delete yourself" });
    }

    await User.deleteOne({ _id: user._id });
    // Note: should also delete associated JobApplications, Portfolios, etc. to be clean.
    await JobApplication.deleteMany({ userId: user._id });

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

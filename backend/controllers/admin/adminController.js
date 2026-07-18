const User = require("../../models/auth/User");
const JobApplication = require("../../models/JobApplication");
const AuditLog = require("../../models/AuditLog");
const { escapeRegex } = require("../../middleware/sanitize");

exports.getUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 12, 50);
    const skip = (page - 1) * limit;
    const search = req.query.search || "";
    const roleFilter = req.query.role || "All";
    const statusFilter = req.query.status || "All";

    let query = {};

    if (search) {
      const safeSearch = escapeRegex(search);
      query.$or = [
        { firstName: { $regex: safeSearch, $options: "i" } },
        { lastName: { $regex: safeSearch, $options: "i" } },
        { email: { $regex: safeSearch, $options: "i" } },
        { username: { $regex: safeSearch, $options: "i" } },
      ];
    }

    if (roleFilter !== "All") {
      query.role = roleFilter.toLowerCase() === "admin" ? "admin" : "student";
    }

    if (statusFilter !== "All") {
      query.isDeactivated = statusFilter === "Suspended";
    }

    const totalFiltered = await User.countDocuments(query);

    const users = await User.find(query)
      .select("-passwordHash")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalUsers = await User.countDocuments({});
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const totalSuspended = await User.countDocuments({ isDeactivated: true });

    const formattedUsers = await Promise.all(
      users.map(async (u) => {
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
          roadmap: u.careerGoal || "\u2014",
          joined: new Date(u.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          lastActive: "Recently",
          avatarColor:
            u.role === "admin"
              ? "bg-violet-600/20 text-violet-400"
              : "bg-emerald-500/20 text-emerald-400",
        };
      })
    );

    res.status(200).json({
      success: true,
      data: formattedUsers,
      pagination: {
        total: totalFiltered,
        page,
        pages: Math.ceil(totalFiltered / limit),
      },
      stats: {
        total: totalUsers,
        pro: 0,
        free: totalUsers - totalAdmins,
        suspended: totalSuspended,
      },
    });
  } catch (error) {
    next(error);
  }
};

const RoadmapProgress = require("../../models/RoadmapProgress");

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-passwordHash").lean();
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }

    const applications = await JobApplication.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .lean();

    const roadmaps = await RoadmapProgress.find({ userId: user._id })
      .sort({ lastUpdated: -1 })
      .lean();

    const activity = [];
    activity.push({
      id: "joined",
      type: "account",
      title: "Account created",
      date: user.createdAt,
      icon: "workspace_premium",
      color: "text-purple-500",
    });

    applications.forEach((app) => {
      activity.push({
        id: `app_${app._id}`,
        type: "application",
        title: `Applied to ${app.company} for ${app.role}`,
        date: app.createdAt,
        icon: "work",
        color: "text-orange-500",
      });
    });

    roadmaps.forEach((rm) => {
      activity.push({
        id: `rm_${rm._id}`,
        type: "roadmap",
        title: `Started roadmap: ${rm.roadmapId}`,
        date: rm.lastUpdated || rm.createdAt || new Date(),
        icon: "flag",
        color: "text-[#00daf3]",
      });
    });

    activity.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.status(200).json({
      success: true,
      data: {
        applications,
        roadmaps,
        activity: activity.slice(0, 20),
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.suspendUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }

    if (user._id.toString() === req.user.id) {
      return res.status(400).json({ success: false, error: "You cannot suspend yourself." });
    }

    const wasDeactivated = user.isDeactivated;
    user.isDeactivated = !user.isDeactivated;
    await user.save();

    await AuditLog.create({
      action: user.isDeactivated ? "USER_SUSPEND" : "USER_ACTIVATE",
      performedBy: req.user.id,
      targetUser: user._id,
      details: `User ${user.isDeactivated ? "suspended" : "activated"}`,
      ip: req.ip,
    });

    res.status(200).json({
      success: true,
      message: `User ${user.isDeactivated ? "suspended" : "activated"} successfully`,
      isDeactivated: user.isDeactivated,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }

    if (user._id.toString() === req.user.id) {
      return res.status(400).json({ success: false, error: "You cannot delete yourself." });
    }

    await User.deleteOne({ _id: user._id });
    await JobApplication.deleteMany({ userId: user._id });

    await AuditLog.create({
      action: "USER_DELETE",
      performedBy: req.user.id,
      targetUser: user._id,
      details: `Deleted user ${user.email}`,
      ip: req.ip,
    });

    res.status(200).json({ success: true, message: "User deleted successfully." });
  } catch (error) {
    next(error);
  }
};

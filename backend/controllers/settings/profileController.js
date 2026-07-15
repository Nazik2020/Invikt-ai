const mongoose = require("mongoose");
const User = require("../../models/auth/User");

// @desc    Get user profile settings
// @route   GET /api/settings/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      data: {
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        careerGoal: user.careerGoal,
        university: user.university,
        country: user.country,
        bio: user.bio,
        profilePicture: user.profilePicture,
        updatedAt: user.updatedAt,
      }
    });
  } catch (error) {
    console.error("Error fetching profile settings:", error);
    res.status(500).json({ success: false, message: "Failed to fetch profile settings" });
  }
};

// @desc    Update user profile settings
// @route   PUT /api/settings/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const { 
      fullName, 
      username, 
      phoneNumber, 
      careerGoal, 
      university, 
      country, 
      bio, 
      profilePicture 
    } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if username is being changed and if it's already taken
    if (username && username !== user.username) {
      const usernameExists = await User.findOne({ username: username.toLowerCase() });
      if (usernameExists) {
        return res.status(409).json({ success: false, message: "Username is already taken" });
      }
      user.username = username.toLowerCase().trim();
    }

    // Handle full name split
    if (fullName) {
      const nameParts = fullName.trim().split(" ");
      user.firstName = nameParts[0] || user.firstName;
      user.lastName = nameParts.slice(1).join(" ") || user.lastName;
    }

    // Update other fields if provided
    if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
    if (careerGoal !== undefined) user.careerGoal = careerGoal;
    if (university !== undefined) user.university = university;
    if (country !== undefined) user.country = country;
    if (bio !== undefined) user.bio = bio;
    if (profilePicture !== undefined) user.profilePicture = profilePicture;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: {
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        careerGoal: user.careerGoal,
        university: user.university,
        country: user.country,
        bio: user.bio,
        profilePicture: user.profilePicture,
        updatedAt: user.updatedAt,
      }
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(409).json({ success: false, message: `This ${field} is already taken.` });
    }
    res.status(500).json({ success: false, message: "Failed to update profile" });
  }
};

// @desc    Deactivate account
// @route   PUT /api/settings/profile/deactivate
// @access  Private
exports.deactivateAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.isDeactivated = true;
    await user.save();

    res.status(200).json({ success: true, message: "Account deactivated successfully" });
  } catch (error) {
    console.error("Error deactivating account:", error);
    res.status(500).json({ success: false, message: "Failed to deactivate account" });
  }
};

// @desc    Delete account permanently
// @route   DELETE /api/settings/profile
// @access  Private
exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await User.findByIdAndDelete(req.user.id);

    // Clean up related data (JobTracker, Roadmaps, Portfolio)
    try {
      if (mongoose.models.Portfolio) {
        await mongoose.model("Portfolio").deleteMany({ user: req.user.id });
      }
      if (mongoose.models.JobApplication) {
        await mongoose.model("JobApplication").deleteMany({ userId: req.user.id });
      }
      if (mongoose.models.RoadmapProgress) {
        await mongoose.model("RoadmapProgress").deleteMany({ userId: req.user.id });
      }
    } catch (cleanupError) {
      console.error("Cleanup user data error on account deletion:", cleanupError);
    }

    res.status(200).json({ success: true, message: "Account deleted permanently" });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ success: false, message: "Failed to delete account" });
  }
};

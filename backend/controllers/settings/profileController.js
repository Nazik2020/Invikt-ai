const mongoose = require("mongoose");
const User = require("../../models/auth/User");
const AuditLog = require("../../models/AuditLog");

exports.getProfile = async (req, res, next) => {
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
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const { fullName, username, phoneNumber, careerGoal, university, country, bio, profilePicture } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (username && username !== user.username) {
      const usernameExists = await User.findOne({ username: username.toLowerCase() });
      if (usernameExists) {
        return res.status(409).json({ success: false, message: "Username is already taken" });
      }
      user.username = username.toLowerCase().trim();
    }

    if (fullName) {
      const nameParts = fullName.trim().split(" ");
      user.firstName = nameParts[0] || user.firstName;
      user.lastName = nameParts.slice(1).join(" ") || user.lastName;
    }

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
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.deactivateAccount = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.isDeactivated = true;
    await user.save();

    await AuditLog.create({
      action: "ACCOUNT_DEACTIVATE",
      performedBy: req.user.id,
      targetUser: req.user.id,
      details: "User deactivated their own account",
      ip: req.ip,
    });

    res.status(200).json({ success: true, message: "Account deactivated successfully" });
  } catch (error) {
    next(error);
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await User.findByIdAndDelete(req.user.id);

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

    await AuditLog.create({
      action: "ACCOUNT_DELETE",
      performedBy: req.user.id,
      targetUser: req.user.id,
      details: `Account ${user.email} deleted`,
      ip: req.ip,
    });

    res.status(200).json({ success: true, message: "Account deleted permanently" });
  } catch (error) {
    next(error);
  }
};

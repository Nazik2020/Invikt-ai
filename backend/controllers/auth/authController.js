const User = require("../../models/auth/User");
const jwt = require("jsonwebtoken");
const TokenBlacklist = require("../../models/TokenBlacklist");

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId, type: "access" }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId, type: "refresh" }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  });
};

const getRefreshExpiry = () => {
  const ms = 30 * 24 * 60 * 60 * 1000;
  return new Date(Date.now() + ms);
};

const sanitizeUser = (user) => ({
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  fullName: user.fullName,
  username: user.username,
  email: user.email,
  role: user.role,
  profilePicture: user.profilePicture,
});

exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    const emailExists = await User.findOne({ email: email.toLowerCase() });
    if (emailExists) {
      return res.status(409).json({ success: false, error: "An account with this email already exists." });
    }

    const usernameExists = await User.findOne({ username: username.toLowerCase() });
    if (usernameExists) {
      return res.status(409).json({ success: false, error: "This username is already taken." });
    }

    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      passwordHash: password,
    });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    await TokenBlacklist.create({
      token: "pending",
      expiresAt: new Date(),
      userId: user._id,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      accessToken,
      refreshToken,
      user: sanitizeUser(user),
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select("+passwordHash");
    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid email or password." });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid email or password." });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      accessToken,
      refreshToken,
      user: sanitizeUser(user),
    });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    const blacklisted = await TokenBlacklist.findOne({ token: refreshToken });
    if (blacklisted) {
      return res.status(401).json({ success: false, error: "Refresh token has been revoked." });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return res.status(401).json({ success: false, error: "Invalid or expired refresh token." });
    }

    if (decoded.type !== "refresh") {
      return res.status(401).json({ success: false, error: "Invalid token type." });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, error: "User no longer exists." });
    }

    if (user.isDeactivated) {
      return res.status(403).json({ success: false, error: "Account has been suspended." });
    }

    await TokenBlacklist.create({
      token: refreshToken,
      expiresAt: new Date(decoded.exp * 1000),
      userId: user._id,
    });

    const newAccessToken = generateAccessToken(user._id);
    const newRefreshToken = generateRefreshToken(user._id);

    res.status(200).json({
      success: true,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      try {
        const decoded = jwt.decode(token);
        if (decoded && decoded.exp) {
          await TokenBlacklist.create({
            token,
            expiresAt: new Date(decoded.exp * 1000),
            userId: req.user.id,
          });
        }
      } catch (e) {
        // token already expired or malformed, ignore
      }
    }

    if (req.body && req.body.refreshToken) {
      try {
        const decoded = jwt.decode(req.body.refreshToken);
        if (decoded && decoded.exp) {
          await TokenBlacklist.create({
            token: req.body.refreshToken,
            expiresAt: new Date(decoded.exp * 1000),
            userId: req.user.id,
          });
        }
      } catch (e) {
        // ignore
      }
    }

    res.status(200).json({ success: true, message: "Logged out successfully." });
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }
    res.status(200).json({
      success: true,
      user: {
        ...sanitizeUser(user),
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, error: "Both current and new password are required." });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ success: false, error: "New password must be at least 8 characters." });
    }
    if (!/[A-Z]/.test(newPassword)) {
      return res.status(400).json({ success: false, error: "New password must include an uppercase letter." });
    }
    if (!/[0-9]/.test(newPassword)) {
      return res.status(400).json({ success: false, error: "New password must include a number." });
    }
    if (!/[^A-Za-z0-9]/.test(newPassword)) {
      return res.status(400).json({ success: false, error: "New password must include a special character." });
    }

    const user = await User.findById(req.user.id).select("+passwordHash");
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }

    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Current password is incorrect." });
    }

    user.passwordHash = newPassword;
    await user.save();

    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      try {
        const decoded = jwt.decode(token);
        if (decoded && decoded.exp) {
          await TokenBlacklist.create({
            token,
            expiresAt: new Date(decoded.exp * 1000),
            userId: user._id,
          });
        }
      } catch (e) {
        // ignore
      }
    }

    res.status(200).json({ success: true, message: "Password changed successfully. Please log in again." });
  } catch (error) {
    next(error);
  }
};

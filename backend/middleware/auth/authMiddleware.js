const jwt = require("jsonwebtoken");
const User = require("../../models/auth/User");
const TokenBlacklist = require("../../models/TokenBlacklist");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Not authorized. No token provided.",
    });
  }

  try {
    const blacklisted = await TokenBlacklist.findOne({ token });
    if (blacklisted) {
      return res.status(401).json({
        success: false,
        error: "Token has been revoked. Please log in again.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: "Not authorized. User no longer exists.",
      });
    }

    if (req.user.isDeactivated) {
      return res.status(403).json({
        success: false,
        error: "Account has been suspended. Contact support.",
      });
    }

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        error: "Token expired. Please refresh your token.",
      });
    }
    return res.status(401).json({
      success: false,
      error: "Not authorized. Token is invalid.",
    });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.status(403).json({
    success: false,
    error: "Access denied. Admin privileges required.",
  });
};

module.exports = { protect, adminOnly };

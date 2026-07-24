const express = require("express");
const {
  register,
  login,
  getMe,
  refreshToken,
  logout,
  changePassword,
  googleAuth,
  googleCallback,
  githubAuth,
  githubCallback,
} = require("../../controllers/auth/authController");
const { protect } = require("../../middleware/auth/authMiddleware");
const {
  registerValidation,
  loginValidation,
  refreshTokenValidation,
} = require("../../middleware/validation");

const router = express.Router();

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.post("/refresh", refreshTokenValidation, refreshToken);

// Google & GitHub OAuth routes
router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);
router.get("/github", githubAuth);
router.get("/github/callback", githubCallback);

router.get("/me", protect, getMe);
router.post("/logout", protect, logout);
router.post("/change-password", protect, changePassword);

module.exports = router;

const express = require("express");
const {
  register,
  login,
  getMe,
  refreshToken,
  logout,
  changePassword,
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

router.get("/me", protect, getMe);
router.post("/logout", protect, logout);
router.post("/change-password", protect, changePassword);

module.exports = router;

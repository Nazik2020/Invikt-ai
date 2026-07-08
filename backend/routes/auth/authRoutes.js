const express = require("express");
const { register, login, getMe } = require("../../controllers/auth/authController");
const { protect } = require("../../middleware/auth/authMiddleware");

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Private route — requires valid JWT
router.get("/me", protect, getMe);

module.exports = router;

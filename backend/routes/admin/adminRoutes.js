const express = require("express");
const { getUsers } = require("../../controllers/admin/adminController");
const { protect, adminOnly } = require("../../middleware/auth/authMiddleware");

const router = express.Router();

// Apply auth middleware to all routes in this file
router.use(protect);
router.use(adminOnly);

// @route   GET /api/admin/users
// @desc    Get paginated users and stats
// @access  Private/Admin
router.get("/users", getUsers);

// @route   PUT /api/admin/users/:id/suspend
// @desc    Toggle suspend status of a user
// @access  Private/Admin
const { suspendUser, deleteUser, getUserProfile } = require("../../controllers/admin/adminController");
router.put("/users/:id/suspend", suspendUser);

// @route   GET /api/admin/users/:id/profile
// @desc    Get detailed user profile
// @access  Private/Admin
router.get("/users/:id/profile", getUserProfile);

// @route   DELETE /api/admin/users/:id
// @desc    Delete a user permanently
// @access  Private/Admin
router.delete("/users/:id", deleteUser);

module.exports = router;

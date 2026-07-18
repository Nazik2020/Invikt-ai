const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../../middleware/auth/authMiddleware");
const { getUsers, suspendUser, deleteUser, getUserProfile } = require("../../controllers/admin/adminController");
const { getApplicationAnalytics, exportApplications } = require("../../controllers/admin/applicationAnalyticsController");
const { getOverview, getHealthCheck } = require("../../controllers/admin/overviewController");
const { adminSearchValidation, adminUserIdValidation } = require("../../middleware/validation");

router.use(protect);
router.use(adminOnly);

router.get("/users", adminSearchValidation, getUsers);
router.put("/users/:id/suspend", adminUserIdValidation, suspendUser);
router.get("/users/:id/profile", adminUserIdValidation, getUserProfile);
router.delete("/users/:id", adminUserIdValidation, deleteUser);

router.get("/applications", getApplicationAnalytics);
router.get("/applications/export", exportApplications);

router.get("/overview/health", getHealthCheck);
router.get("/overview", getOverview);

module.exports = router;

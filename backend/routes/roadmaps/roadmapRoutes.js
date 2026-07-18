const express = require("express");
const router = express.Router();
const { getRoadmapProgress, updateRoadmapProgress } = require("../../controllers/roadmaps/roadmapController");
const { protect } = require("../../middleware/auth/authMiddleware");
const { roadmapUpdateValidation } = require("../../middleware/validation");

router.get("/:roadmapId/progress", protect, getRoadmapProgress);
router.put("/:roadmapId/progress", protect, roadmapUpdateValidation, updateRoadmapProgress);

module.exports = router;

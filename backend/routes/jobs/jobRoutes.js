const express = require("express");
const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require("../../controllers/jobs/jobController");
const { protect } = require("../../middleware/auth/authMiddleware");

const router = express.Router();

// All job routes are protected — user must be logged in
router.route("/").get(protect, getJobs).post(protect, addJob);
router.route("/:id").put(protect, updateJob).delete(protect, deleteJob);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getJobs, addJob, updateJob, deleteJob } = require("../../controllers/jobs/jobController");
const { protect } = require("../../middleware/auth/authMiddleware");
const { jobValidation } = require("../../middleware/validation");

router.use(protect);

router.route("/")
  .get(getJobs)
  .post(jobValidation, addJob);

router.route("/:id")
  .put(jobValidation, updateJob)
  .delete(deleteJob);

module.exports = router;

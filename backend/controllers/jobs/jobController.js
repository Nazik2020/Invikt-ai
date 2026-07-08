const JobApplication = require("../../models/jobs/JobApplication");

// @desc    Get all job applications for the logged-in user
// @route   GET /api/jobs
// @access  Private
exports.getJobs = async (req, res) => {
  try {
    const jobs = await JobApplication.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add a new job application
// @route   POST /api/jobs
// @access  Private
exports.addJob = async (req, res) => {
  try {
    const jobData = { ...req.body, userId: req.user.id };
    const job = await JobApplication.create(jobData);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Update a job application
// @route   PUT /api/jobs/:id
// @access  Private
exports.updateJob = async (req, res) => {
  try {
    const job = await JobApplication.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, // Ensures ownership
      req.body,
      { new: true, runValidators: true }
    );

    if (!job) {
      return res
        .status(404)
        .json({ success: false, error: "Job not found or not authorized." });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Delete a job application
// @route   DELETE /api/jobs/:id
// @access  Private
exports.deleteJob = async (req, res) => {
  try {
    const job = await JobApplication.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id, // Ensures ownership — can only delete your own jobs
    });

    if (!job) {
      return res
        .status(404)
        .json({ success: false, error: "Job not found or not authorized." });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

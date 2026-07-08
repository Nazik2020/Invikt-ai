const JobApplication = require('../models/JobApplication');

// @desc    Get all job applications for a user
// @route   GET /api/jobs
// @access  Public (Will be Private later when auth is added)
exports.getJobs = async (req, res) => {
  try {
    // Hardcoded user ID for now until we implement authentication
    const mockUserId = "60d0fe4f5311236168a109ca"; 
    
    const jobs = await JobApplication.find({ userId: mockUserId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Add a new job application
// @route   POST /api/jobs
// @access  Public
exports.addJob = async (req, res) => {
  try {
    const mockUserId = "60d0fe4f5311236168a109ca";
    
    // Add the mock user ID to the request body
    const jobData = { ...req.body, userId: mockUserId };
    
    const job = await JobApplication.create(jobData);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Update a job application (e.g., moving stages on Kanban board)
// @route   PUT /api/jobs/:id
// @access  Public
exports.updateJob = async (req, res) => {
  try {
    const job = await JobApplication.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Delete a job application
// @route   DELETE /api/jobs/:id
// @access  Public
exports.deleteJob = async (req, res) => {
  try {
    const job = await JobApplication.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

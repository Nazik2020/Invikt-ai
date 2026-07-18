const JobApplication = require("../../models/jobs/JobApplication");

exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await JobApplication.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    next(error);
  }
};

exports.addJob = async (req, res, next) => {
  try {
    const { company, role, stage, badge, source, location, employment, jobUrl, dateApplied, notes, info, logoColor, logoText } = req.body;

    const job = await JobApplication.create({
      company,
      role,
      stage: stage || "WISHLIST",
      badge,
      source,
      location,
      employment,
      jobUrl,
      dateApplied,
      notes,
      info,
      logoColor,
      logoText,
      userId: req.user.id,
    });

    res.status(201).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
};

exports.updateJob = async (req, res, next) => {
  try {
    const { company, role, stage, badge, source, location, employment, jobUrl, dateApplied, notes, info, logoColor, logoText, time } = req.body;

    const updateData = {};
    if (company !== undefined) updateData.company = company;
    if (role !== undefined) updateData.role = role;
    if (stage !== undefined) updateData.stage = stage;
    if (badge !== undefined) updateData.badge = badge;
    if (source !== undefined) updateData.source = source;
    if (location !== undefined) updateData.location = location;
    if (employment !== undefined) updateData.employment = employment;
    if (jobUrl !== undefined) updateData.jobUrl = jobUrl;
    if (dateApplied !== undefined) updateData.dateApplied = dateApplied;
    if (notes !== undefined) updateData.notes = notes;
    if (info !== undefined) updateData.info = info;
    if (logoColor !== undefined) updateData.logoColor = logoColor;
    if (logoText !== undefined) updateData.logoText = logoText;
    if (time !== undefined) updateData.time = time;

    const job = await JobApplication.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!job) {
      return res.status(404).json({ success: false, error: "Job not found or not authorized." });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
};

exports.deleteJob = async (req, res, next) => {
  try {
    const job = await JobApplication.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!job) {
      return res.status(404).json({ success: false, error: "Job not found or not authorized." });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

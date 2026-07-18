const RoadmapProgress = require("../../models/RoadmapProgress");

const getRoadmapProgress = async (req, res, next) => {
  try {
    const { roadmapId } = req.params;
    const userId = req.user._id;

    let progress = await RoadmapProgress.findOne({ userId, roadmapId });

    if (!progress) {
      progress = await RoadmapProgress.create({
        userId,
        roadmapId,
        completedNodes: [],
        progressPercentage: 0,
      });
    }

    res.status(200).json({ success: true, data: progress });
  } catch (error) {
    next(error);
  }
};

const updateRoadmapProgress = async (req, res, next) => {
  try {
    const { roadmapId } = req.params;
    const { completedNodes, progressPercentage } = req.body;
    const userId = req.user._id;

    const progress = await RoadmapProgress.findOneAndUpdate(
      { userId, roadmapId },
      {
        completedNodes,
        progressPercentage,
        lastUpdated: Date.now(),
      },
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, data: progress });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRoadmapProgress,
  updateRoadmapProgress,
};

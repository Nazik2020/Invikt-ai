const mongoose = require("mongoose");

const roadmapProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roadmapId: { type: String, required: true },
  completedNodes: [{ type: String }],
  progressPercentage: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("RoadmapProgress", roadmapProgressSchema);

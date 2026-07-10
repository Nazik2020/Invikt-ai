const JobApplication = require('../../models/JobApplication');
const RoadmapProgress = require('../../models/RoadmapProgress');

// @desc    Get dashboard overview data
// @route   GET /api/dashboard
// @access  Private
const getDashboardOverview = async (req, res) => {
  try {
    const userId = req.user._id;

    // 1. Fetch Job Metrics
    const totalJobs = await JobApplication.countDocuments({ userId });
    
    // In progress stages: ASSESSMENT, INTERVIEW, FINAL
    const inProgressCount = await JobApplication.countDocuments({
      userId,
      stage: { $in: ["ASSESSMENT", "INTERVIEW", "FINAL"] }
    });

    const successStages = await JobApplication.countDocuments({
      userId,
      stage: { $in: ["INTERVIEW", "FINAL", "OFFER"] }
    });
    
    const responseRate = totalJobs > 0 ? Math.round((successStages / totalJobs) * 100) : 0;

    // 2. Fetch Recent Applications
    const recentJobs = await JobApplication.find({ userId })
      .sort({ createdAt: -1 })
      .limit(4);

    const formattedRecentJobs = recentJobs.map(job => {
      // Map job status to UI colors
      let color = "text-slate-600 dark:text-white/60 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10";
      if (["INTERVIEW", "FINAL"].includes(job.stage)) {
        color = "text-cyan-400 bg-cyan-400/10 border-cyan-400/20";
      } else if (job.stage === "OFFER") {
        color = "text-violet-400 bg-violet-400/10 border-violet-400/20";
      } else if (job.stage === "REJECTED") {
        color = "text-rose-400 bg-rose-400/10 border-rose-400/20";
      }

      return {
        company: job.company,
        role: job.role,
        status: job.stage,
        color
      };
    });

    // 3. Fetch Roadmap Progress
    const roadmapProgress = await RoadmapProgress.findOne({ userId }).sort({ lastUpdated: -1 });
    
    const progressPercentage = roadmapProgress ? roadmapProgress.progressPercentage : 0;
    const completedNodesCount = roadmapProgress ? roadmapProgress.completedNodes.length : 0;

    // 4. Construct Dashboard Response matching UI expectations
    res.status(200).json({
      success: true,
      data: {
        metrics: [
          {
            title: "Applications Sent",
            value: totalJobs.toString(),
            subtext: "Tracked in JobTracker",
            type: "progress",
            progress: totalJobs > 0 ? Math.min(100, totalJobs * 5) : 0, 
            color: "from-violet-500 to-cyan-400",
          },
          {
            title: "In Progress",
            value: inProgressCount.toString(),
            subtext: "Active interviews",
            type: "segments",
            activeCount: inProgressCount,
            totalCount: 3,
          },
          {
            title: "Skills Learned",
            value: `${progressPercentage}%`,
            type: "radial",
            percentage: progressPercentage,
          },
          {
            title: "Response Rate",
            value: `${responseRate}%`,
            subtext: responseRate > 20 ? "+Good" : "Neutral",
            type: "bars",
            bars: [25, 45, 15, 60, responseRate > 0 ? responseRate : 35],
          },
        ],
        activeRoadmap: {
          title: roadmapProgress ? (roadmapProgress.roadmapId || "Frontend Developer") : "Frontend Developer",
          skillsValidated: `${completedNodesCount}/12`,
          stages: [
            {
              title: "Foundations",
              desc: "HTML5, CSS3, Semantic Web & Accessibility",
              status: completedNodesCount > 0 ? "completed" : "active",
              badge: completedNodesCount > 0 ? "COMPLETED" : "IN PROGRESS",
              progress: completedNodesCount > 0 ? 100 : 40
            },
            {
              title: "JS Mastery",
              desc: "ES6+, Asynchronous Patterns & API Integration",
              status: completedNodesCount > 3 ? "completed" : (completedNodesCount > 0 ? "active" : "locked"),
              badge: completedNodesCount > 3 ? "COMPLETED" : (completedNodesCount > 0 ? "IN PROGRESS" : "UP NEXT"),
              progress: completedNodesCount > 0 && completedNodesCount <= 3 ? 42 : (completedNodesCount > 3 ? 100 : 0),
            },
            {
              title: "React Ecosystem",
              desc: "Hooks, State Management & Modern Frameworks",
              status: completedNodesCount > 6 ? "completed" : (completedNodesCount > 3 ? "active" : "locked"),
              badge: completedNodesCount > 6 ? "COMPLETED" : (completedNodesCount > 3 ? "IN PROGRESS" : "UP NEXT"),
              progress: 0
            },
          ]
        },
        recentApplications: formattedRecentJobs.length > 0 ? formattedRecentJobs : [
          { company: "No Applications", role: "Add one in Job Tracker", status: "NEW", color: "text-slate-400 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10" }
        ]
      }
    });

  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch dashboard data" });
  }
};

module.exports = {
  getDashboardOverview
};

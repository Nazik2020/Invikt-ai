const jwt = require("jsonwebtoken");
const QRCode = require("qrcode");
const Portfolio = require("../../models/Portfolio");
const PortfolioAnalytics = require("../../models/share/PortfolioAnalytics");

const getOptionalUserId = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded.id;
    } catch (e) {
      return null;
    }
  }
  return null;
};

const recordView = async (req, res, next) => {
  try {
    const { customUrl } = req.params;
    const portfolio = await Portfolio.findOne({ customUrl });

    if (!portfolio) {
      return res.status(404).json({ success: false, message: "Portfolio not found" });
    }

    const viewerId = getOptionalUserId(req);
    if (viewerId && viewerId.toString() === portfolio.user.toString()) {
      return res.status(200).json({ success: true, message: "View skipped (owner)" });
    }

    await PortfolioAnalytics.create({
      portfolio: portfolio._id,
      eventType: "view",
    });

    res.status(201).json({ success: true, message: "View recorded successfully" });
  } catch (error) {
    next(error);
  }
};

const recordClick = async (req, res, next) => {
  try {
    const { customUrl } = req.params;
    const portfolio = await Portfolio.findOne({ customUrl });

    if (!portfolio) {
      return res.status(404).json({ success: false, message: "Portfolio not found" });
    }

    const viewerId = getOptionalUserId(req);
    if (viewerId && viewerId.toString() === portfolio.user.toString()) {
      return res.status(200).json({ success: true, message: "Click skipped (owner)" });
    }

    await PortfolioAnalytics.create({
      portfolio: portfolio._id,
      eventType: "click",
    });

    res.status(201).json({ success: true, message: "Click recorded successfully" });
  } catch (error) {
    next(error);
  }
};

const getShareStats = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });

    if (!portfolio) {
      return res.status(404).json({ success: false, message: "Portfolio not found" });
    }

    const totalViews = await PortfolioAnalytics.countDocuments({
      portfolio: portfolio._id,
      eventType: "view",
    });

    const linkClicks = await PortfolioAnalytics.countDocuments({
      portfolio: portfolio._id,
      eventType: "click",
    });

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const viewsThisWeek = await PortfolioAnalytics.countDocuments({
      portfolio: portfolio._id,
      eventType: "view",
      timestamp: { $gte: sevenDaysAgo },
    });

    res.status(200).json({
      success: true,
      stats: {
        totalViews,
        linkClicks,
        viewsThisWeek,
      },
    });
  } catch (error) {
    next(error);
  }
};

const generateQRCode = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });

    if (!portfolio) {
      return res.status(404).json({ success: false, message: "Portfolio not found" });
    }

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const publicUrl = `${frontendUrl}/p/${portfolio.customUrl}`;

    const qrCodeUrl = await QRCode.toDataURL(publicUrl, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: 300,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    res.status(200).json({
      success: true,
      qrCodeUrl,
      publicUrl,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  recordView,
  recordClick,
  getShareStats,
  generateQRCode,
};

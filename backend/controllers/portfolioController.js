const Portfolio = require("../models/Portfolio");

const PORTFOLIO_ALLOWED_FIELDS = [
  "personalInfo",
  "socialLinks",
  "experience",
  "technologies",
  "projects",
  "certifications",
  "volunteering",
  "isPublished",
  "customUrl",
];

const pickAllowed = (body) => {
  const picked = {};
  for (const field of PORTFOLIO_ALLOWED_FIELDS) {
    if (body[field] !== undefined) {
      picked[field] = body[field];
    }
  }
  return picked;
};

const getPortfolio = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });
    if (!portfolio) {
      return res.status(200).json({ message: "No portfolio found", data: null });
    }
    res.status(200).json(portfolio);
  } catch (error) {
    next(error);
  }
};

const updatePortfolio = async (req, res, next) => {
  try {
    const allowed = pickAllowed(req.body);

    let portfolio = await Portfolio.findOne({ user: req.user.id });

    if (portfolio) {
      portfolio = await Portfolio.findOneAndUpdate(
        { user: req.user.id },
        { $set: allowed },
        { new: true, runValidators: true }
      );
    } else {
      portfolio = await Portfolio.create({
        user: req.user.id,
        ...allowed,
      });
    }

    res.status(200).json(portfolio);
  } catch (error) {
    next(error);
  }
};

const getPublicPortfolio = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.findOne({
      customUrl: req.params.customUrl,
      isPublished: true,
    }).populate("user", "firstName lastName email isDeactivated");

    if (!portfolio || !portfolio.user || portfolio.user.isDeactivated) {
      return res.status(404).json({ message: "Portfolio not found or not public" });
    }

    res.status(200).json(portfolio);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPortfolio,
  updatePortfolio,
  getPublicPortfolio,
};

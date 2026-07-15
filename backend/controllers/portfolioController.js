const Portfolio = require('../models/Portfolio');

// @desc    Get user portfolio
// @route   GET /api/portfolio
// @access  Private
const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ user: req.user.id });
    
    // If no portfolio exists, return an empty template
    if (!portfolio) {
      return res.status(200).json({ message: "No portfolio found", data: null });
    }
    
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update user portfolio
// @route   PUT /api/portfolio
// @access  Private
const updatePortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ user: req.user.id });

    if (portfolio) {
      // Update existing
      portfolio = await Portfolio.findOneAndUpdate(
        { user: req.user.id },
        { $set: req.body },
        { new: true }
      );
    } else {
      // Create new
      portfolio = await Portfolio.create({
        user: req.user.id,
        ...req.body
      });
    }

    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get public portfolio by custom URL
// @route   GET /api/portfolio/public/:customUrl
// @access  Public
const getPublicPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ 
      customUrl: req.params.customUrl,
      isPublished: true 
    }).populate('user', 'name email isDeactivated');

    if (!portfolio || !portfolio.user || portfolio.user.isDeactivated) {
      return res.status(404).json({ message: 'Portfolio not found or not public' });
    }

    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getPortfolio,
  updatePortfolio,
  getPublicPortfolio
};

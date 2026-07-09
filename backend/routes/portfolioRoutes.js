const express = require('express');
const router = express.Router();
const { getPortfolio, updatePortfolio, getPublicPortfolio } = require('../controllers/portfolioController');
const { protect } = require('../middleware/auth/authMiddleware');

// Private routes (require authentication)
router.route('/')
  .get(protect, getPortfolio)
  .put(protect, updatePortfolio);

// Public routes
router.get('/public/:customUrl', getPublicPortfolio);

module.exports = router;

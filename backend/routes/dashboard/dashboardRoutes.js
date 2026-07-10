const express = require('express');
const router = express.Router();
const { getDashboardOverview } = require('../../controllers/dashboard/dashboardController');
const { protect } = require('../../middleware/auth/authMiddleware');

router.get('/', protect, getDashboardOverview);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getPortfolio, updatePortfolio, getPublicPortfolio } = require("../controllers/portfolioController");
const { protect } = require("../middleware/auth/authMiddleware");
const { portfolioUpdateValidation, portfolioShareValidation } = require("../middleware/validation");

router.route("/")
  .get(protect, getPortfolio)
  .put(protect, portfolioUpdateValidation, updatePortfolio);

router.get("/public/:customUrl", portfolioShareValidation, getPublicPortfolio);

module.exports = router;

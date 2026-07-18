const express = require("express");
const router = express.Router();
const { protect } = require("../../middleware/auth/authMiddleware");
const { recordView, recordClick, getShareStats, generateQRCode } = require("../../controllers/share/portfolioShareController");
const { portfolioShareValidation } = require("../../middleware/validation");

router.post("/record-view/:customUrl", portfolioShareValidation, recordView);
router.post("/record-click/:customUrl", portfolioShareValidation, recordClick);

router.get("/stats", protect, getShareStats);
router.get("/qrcode", protect, generateQRCode);

module.exports = router;

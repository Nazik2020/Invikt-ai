const express = require("express");
const { getProfile, updateProfile, deactivateAccount, deleteAccount } = require("../../controllers/settings/profileController");
const { protect } = require("../../middleware/auth/authMiddleware");

const router = express.Router();

// All routes require authentication
router.use(protect);

router.route("/")
  .get(getProfile)
  .put(updateProfile)
  .delete(deleteAccount);

router.put("/deactivate", deactivateAccount);

module.exports = router;

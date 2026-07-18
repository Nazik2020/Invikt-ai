const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, deactivateAccount, deleteAccount } = require("../../controllers/settings/profileController");
const { protect } = require("../../middleware/auth/authMiddleware");
const { profileUpdateValidation } = require("../../middleware/validation");

router.use(protect);

router.route("/")
  .get(getProfile)
  .put(profileUpdateValidation, updateProfile)
  .delete(deleteAccount);

router.put("/deactivate", deactivateAccount);

module.exports = router;

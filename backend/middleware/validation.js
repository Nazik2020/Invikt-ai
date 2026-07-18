const { body, param, query, validationResult } = require("express-validator");

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: errors.array()[0].msg,
    });
  }
  next();
};

const registerValidation = [
  body("firstName")
    .trim()
    .notEmpty().withMessage("First name is required")
    .isLength({ max: 50 }).withMessage("First name too long"),
  body("lastName")
    .trim()
    .notEmpty().withMessage("Last name is required")
    .isLength({ max: 50 }).withMessage("Last name too long"),
  body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({ min: 3, max: 30 }).withMessage("Username must be 3-30 characters")
    .matches(/^[a-zA-Z0-9_]+$/).withMessage("Username can only contain letters, numbers, and underscores"),
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .normalizeEmail(),
  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/).withMessage("Password must include an uppercase letter")
    .matches(/[0-9]/).withMessage("Password must include a number")
    .matches(/[^A-Za-z0-9]/).withMessage("Password must include a special character"),
  handleValidation,
];

const loginValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .normalizeEmail(),
  body("password")
    .notEmpty().withMessage("Password is required"),
  handleValidation,
];

const refreshTokenValidation = [
  body("refreshToken")
    .notEmpty().withMessage("Refresh token is required"),
  handleValidation,
];

const jobValidation = [
  body("company")
    .trim()
    .notEmpty().withMessage("Company name is required")
    .isLength({ max: 200 }).withMessage("Company name too long"),
  body("role")
    .trim()
    .notEmpty().withMessage("Role is required")
    .isLength({ max: 200 }).withMessage("Role name too long"),
  body("stage")
    .optional()
    .isIn(["WISHLIST", "APPLIED", "ASSESSMENT", "INTERVIEW", "FINAL_INTERVIEW", "OFFER", "REJECTED"])
    .withMessage("Invalid stage"),
  body("location")
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage("Location too long"),
  body("employment")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Employment type too long"),
  body("source")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Source too long"),
  body("jobUrl")
    .optional()
    .trim()
    .isURL().withMessage("Invalid job URL"),
  body("notes")
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage("Notes too long"),
  body("info")
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage("Info too long"),
  handleValidation,
];

const portfolioUpdateValidation = [
  body("personalInfo.fullName")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Full name too long"),
  body("personalInfo.tagline")
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage("Tagline too long"),
  body("personalInfo.primaryDomain")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Domain too long"),
  body("personalInfo.location")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Location too long"),
  body("personalInfo.bio")
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage("Bio too long"),
  body("personalInfo.avatarUrl")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("Avatar URL too long"),
  body("personalInfo.resumeUrl")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("Resume URL too long"),
  body("socialLinks.github")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("GitHub URL too long"),
  body("socialLinks.linkedin")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("LinkedIn URL too long"),
  body("socialLinks.twitter")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("Twitter URL too long"),
  body("socialLinks.website")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("Website URL too long"),
  body("customUrl")
    .optional()
    .trim()
    .matches(/^[a-zA-Z0-9_-]+$/).withMessage("Custom URL can only contain letters, numbers, hyphens, and underscores")
    .isLength({ min: 3, max: 50 }).withMessage("Custom URL must be 3-50 characters"),
  body("isPublished")
    .optional()
    .isBoolean().withMessage("isPublished must be a boolean"),
  handleValidation,
];

const profileUpdateValidation = [
  body("fullName")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Full name too long"),
  body("username")
    .optional()
    .trim()
    .isLength({ min: 3, max: 30 }).withMessage("Username must be 3-30 characters")
    .matches(/^[a-zA-Z0-9_]+$/).withMessage("Username can only contain letters, numbers, and underscores"),
  body("phoneNumber")
    .optional()
    .trim()
    .isLength({ max: 20 }).withMessage("Phone number too long"),
  body("careerGoal")
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage("Career goal too long"),
  body("university")
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage("University name too long"),
  body("country")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Country name too long"),
  body("bio")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("Bio too long"),
  body("profilePicture")
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage("Profile picture URL too long"),
  handleValidation,
];

const roadmapUpdateValidation = [
  body("completedNodes")
    .isArray().withMessage("completedNodes must be an array"),
  body("completedNodes.*")
    .isString().withMessage("Each completed node must be a string")
    .isLength({ max: 100 }).withMessage("Node ID too long"),
  body("progressPercentage")
    .isNumeric().withMessage("progressPercentage must be a number")
    .custom((val) => val >= 0 && val <= 100).withMessage("progressPercentage must be 0-100"),
  handleValidation,
];

const portfolioShareValidation = [
  param("customUrl")
    .trim()
    .matches(/^[a-zA-Z0-9_-]+$/).withMessage("Invalid portfolio URL")
    .isLength({ min: 1, max: 50 }).withMessage("Portfolio URL too long"),
  handleValidation,
];

const adminSearchValidation = [
  query("search")
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage("Search query too long"),
  query("page")
    .optional()
    .isInt({ min: 1 }).withMessage("Page must be a positive integer"),
  query("limit")
    .optional()
    .isInt({ min: 1, max: 50 }).withMessage("Limit must be 1-50"),
  handleValidation,
];

const adminUserIdValidation = [
  param("id")
    .isMongoId().withMessage("Invalid user ID"),
  handleValidation,
];

const uploadValidation = [
  body("container")
    .optional()
    .trim()
    .matches(/^[a-z0-9-]+$/).withMessage("Container name can only contain lowercase letters, numbers, and hyphens")
    .isLength({ min: 1, max: 63 }).withMessage("Container name must be 1-63 characters"),
  handleValidation,
];

module.exports = {
  handleValidation,
  registerValidation,
  loginValidation,
  refreshTokenValidation,
  jobValidation,
  portfolioUpdateValidation,
  profileUpdateValidation,
  roadmapUpdateValidation,
  portfolioShareValidation,
  adminSearchValidation,
  adminUserIdValidation,
  uploadValidation,
};

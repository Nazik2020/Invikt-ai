const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadFileToBlob } = require("../utils/azureStorage");
const { protect } = require("../middleware/auth/authMiddleware");
const { uploadValidation } = require("../middleware/validation");

const ALLOWED_CONTAINERS = ["invikt-uploads", "resume-uploads", "portfolio-uploads"];
const ALLOWED_MIMES = [
  "image/jpeg", "image/png", "image/gif", "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIMES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("File type not allowed."), false);
    }
  },
});

router.post("/", protect, upload.single("file"), uploadValidation, async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded." });
    }

    const { originalname, buffer, mimetype } = req.file;
    const container = req.body.container || process.env.AZURE_STORAGE_CONTAINER_NAME;

    if (!ALLOWED_CONTAINERS.includes(container)) {
      return res.status(400).json({ success: false, error: "Invalid container name." });
    }

    const url = await uploadFileToBlob(buffer, originalname, mimetype, container);

    res.status(200).json({
      success: true,
      url,
      message: "File uploaded successfully.",
    });
  } catch (error) {
    if (error.message === "File type not allowed.") {
      return res.status(400).json({ success: false, error: error.message });
    }
    next(error);
  }
});

module.exports = router;

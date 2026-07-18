const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const httpsRedirect = require("./middleware/httpsRedirect");
const { sanitize, xssClean } = require("./middleware/sanitize");

dotenv.config();

connectDB();

const app = express();

// ─── HTTPS Redirect (production) ─────────────────────────────────────────────
app.use(httpsRedirect);

// ─── Security Headers ────────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "http://localhost:5000", "https://mango-field-0f043dd0f.7.azurestaticapps.net"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// ─── Rate Limiting ───────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, error: "Too many requests. Please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", limiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, error: "Too many login attempts. Please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── NoSQL Injection Protection ──────────────────────────────────────────────
app.use(sanitize);

// ─── XSS Protection ──────────────────────────────────────────────────────────
app.use(xssClean);

// ─── Core Middleware ──────────────────────────────────────────────────────────
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://mango-field-0f043dd0f.7.azurestaticapps.net",
    "https://invikt-backend.onrender.com",
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  credentials: true,
}));
app.use(express.json({ limit: "2mb" }));

// ─── Route Imports ────────────────────────────────────────────────────────────
const authRoutes = require("./routes/auth/authRoutes");
const jobRoutes = require("./routes/jobs/jobRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const portfolioShareRoutes = require("./routes/share/portfolioShareRoutes");
const dashboardRoutes = require("./routes/dashboard/dashboardRoutes");
const roadmapRoutes = require("./routes/roadmaps/roadmapRoutes");
const profileRoutes = require("./routes/settings/profileRoutes");
const adminRoutes = require("./routes/admin/adminRoutes");

// ─── Mount Routes ─────────────────────────────────────────────────────────────
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/portfolio/share", portfolioShareRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/roadmaps", roadmapRoutes);
app.use("/api/settings/profile", profileRoutes);
app.use("/api/admin", adminRoutes);

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Invikt AI API is running...",
    version: "1.0.0",
  });
});

// ─── 404 Handler ──────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found." });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

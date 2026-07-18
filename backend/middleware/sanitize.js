const mongoSanitize = require("express-mongo-sanitize");

const sanitize = mongoSanitize({
  replaceWith: "_",
  onSanitize: ({ req, key }) => {
    console.warn(`[SECURITY] Blocked NoSQL injection on ${req.method} ${req.originalUrl} — key: ${key}`);
  },
});

const HTML_ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};

const escapeHtml = (str) => {
  return str.replace(/[&<>"'/]/g, (char) => HTML_ENTITIES[char] || char);
};

const sanitizeStrings = (obj) => {
  if (!obj || typeof obj !== "object") return obj;

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "string") {
      obj[key] = escapeHtml(obj[key]).trim();
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      sanitizeStrings(obj[key]);
    }
  }
  return obj;
};

const xssClean = (req, res, next) => {
  if (req.body && typeof req.body === "object") {
    sanitizeStrings(req.body);
  }
  if (req.query && typeof req.query === "object") {
    sanitizeStrings(req.query);
  }
  if (req.params && typeof req.params === "object") {
    sanitizeStrings(req.params);
  }
  next();
};

const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

module.exports = { sanitize, xssClean, escapeRegex };

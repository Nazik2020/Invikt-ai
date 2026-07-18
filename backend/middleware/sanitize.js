const isPlainObject = (obj) =>
  obj !== null && typeof obj === "object" && !Array.isArray(obj);

const sanitizeKeys = (obj) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (key.startsWith("$")) {
      const safeKey = key.replace(/\$/g, "_");
      obj[safeKey] = obj[key];
      delete obj[key];
      if (isPlainObject(obj[safeKey])) {
        sanitizeKeys(obj[safeKey]);
      }
    } else if (isPlainObject(obj[key])) {
      sanitizeKeys(obj[key]);
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((item) => {
        if (isPlainObject(item)) sanitizeKeys(item);
      });
    }
  }
};

const sanitize = (req, res, next) => {
  try {
    if (isPlainObject(req.body)) sanitizeKeys(req.body);
    if (isPlainObject(req.query)) sanitizeKeys(req.query);
    if (isPlainObject(req.params)) sanitizeKeys(req.params);
  } catch (e) {
    console.warn(`[SECURITY] Sanitize error on ${req.method} ${req.originalUrl}`);
  }
  next();
};

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
  try {
    if (isPlainObject(req.body)) sanitizeStrings(req.body);
    if (isPlainObject(req.query)) sanitizeStrings(req.query);
    if (isPlainObject(req.params)) sanitizeStrings(req.params);
  } catch (e) {
    // ignore
  }
  next();
};

const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

module.exports = { sanitize, xssClean, escapeRegex };

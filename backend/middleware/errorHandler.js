const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = "An unexpected error occurred. Please try again.";

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 400;
    message = "Invalid ID format.";
  } else if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue)[0];
    message = `A record with this ${field} already exists.`;
  } else if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)[0]?.message || "Validation failed.";
  } else if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token. Please log in again.";
  } else if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired. Please log in again.";
  }

  if (statusCode === 500) {
    console.error(`[SERVER ERROR] ${req.method} ${req.originalUrl}:`, err.message);
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;

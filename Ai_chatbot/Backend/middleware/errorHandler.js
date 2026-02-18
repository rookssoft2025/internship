
// Global error handler
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  console.error("Error:", err.message);

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};




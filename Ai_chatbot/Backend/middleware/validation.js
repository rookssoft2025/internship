// Validate  message
export const validateChatMessage = (req, res, next) => {
  const { message } = req.body;

  if (!message) {
    const error = new Error("Message is required");
    error.statusCode = 400;
    return next(error);
  }

  if (typeof message !== "string") {
    const error = new Error("Message must be a string");
    error.statusCode = 400;
    return next(error);
  }

  if (message.trim().length === 0) {
    const error = new Error("Message cannot be empty");
    error.statusCode = 400;
    return next(error);
  }

  if (message.length > 5000) {
    const error = new Error("Message is too long");
    error.statusCode = 400;
    return next(error);
  }

  req.body.message = message.trim();
  next();
};

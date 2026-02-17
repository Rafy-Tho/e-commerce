// eslint-disable-next-line no-unused-vars
function errorMiddleware(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  // Multer specific error handling
  if (err.code === 'LIMIT_FILE_SIZE') {
    statusCode = 400;
    message = 'File is too large. Max limit is 5MB.';
  }
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Resource not found. Invalid ${err.path}: ${err.value}`;
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    // Combine all validation messages into one
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
  }

  // Mongoose duplicate key error
  if (err.code && err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `Duplicate field value entered for ${field}: ${err.keyValue[field]}`;
  }
  // JWT invalid token
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
  }

  // JWT expired token
  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expired';
  }
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
}

export default errorMiddleware;

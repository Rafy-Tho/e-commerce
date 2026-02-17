import AppError from './AppError.js';

export default function notFound(req, res, next) {
  // Pass the error to the next middleware (which will be your errorMiddleware)
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404),
  );
}

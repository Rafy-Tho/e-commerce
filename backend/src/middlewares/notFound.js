import AppError from './AppError.js';

function notFound(req, res, next) {
  return next(new AppError('Resource not found', 404));
}

export default notFound;

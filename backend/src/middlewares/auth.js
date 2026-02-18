import ENV from '../configs/env.js';
import User from '../models/User.js';
import AppError from './AppError.js';
import asyncHandler from './asyncHandler.js';
import jwt from 'jsonwebtoken';

export const authenticate = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next(new AppError('Unauthorized', 401));
  // verify token
  const decoded = jwt.verify(token, ENV.JWT_SECRET);
  if (!decoded) return next(new AppError('Unauthorized', 401));
  // find user
  const user = await User.findById(decoded.id);
  if (!user) return next(new AppError('Unauthorized', 401));
  // attach user to request object
  req.user = user;
  next();
});

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('Forbidden', 403));
    }
    next();
  };
};

import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/User.js';
import AppError from '../middlewares/AppError.js';
import createCookie from '../utils/createCookie.js';
import ENV from '../configs/env.js';
// @desc    Create a new user
// @route   POST /api/v1/user/register
// @access  Public
export const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, gender } = req.body;

  if (!name || !email || !password || !gender) {
    return next(new AppError('Please fill all the inputs.', 400));
  }
  // check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) return next(new AppError('User already exists', 404));
  // create user
  const user = await User.create({ name, email, password, gender });

  // create token
  const token = user.generateToken();
  // create cookie
  createCookie(res, token);
  // remove password from response
  user.password = undefined;
  // send response
  res.status(201).json({
    status: 'success',
    user,
    message: 'User created successfully',
  });
});
// @desc    Login user
// @route   POST /api/v1/user/login
// @access  Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please fill all the inputs.', 400));
  }
  // check if user exists
  const user = await User.findOne({ email }).select('+password');
  if (!user) return next(new AppError('Invalid email or password', 404));
  // compare password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid)
    return next(new AppError('Invalid email or password', 401));
  // create token
  const token = user.generateToken();
  // create cookie
  createCookie(res, token);
  // remove password from response
  user.password = undefined;
  // send response
  res.status(200).json({
    status: 'success',
    user,
    message: 'User logged in successfully',
  });
});
// @desc    Logout user
// @route   POST /api/v1/user/logout
// @access  Private
// eslint-disable-next-line no-unused-vars
export const logoutUser = asyncHandler(async (req, res, next) => {
  // clear cookie
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  // send response
  res.status(200).json({
    status: 'success',
    message: 'User logged out successfully',
  });
});
// @desc    Get user profile
// @route   GET /api/v1/user/profile
// @access  Private
export const getProfile = asyncHandler(async (req, res, next) => {
  // get user from request object
  const { _id } = req.user;
  // find user
  const user = await User.findById(_id);
  if (!user) return next(new AppError('User not found', 404));
  // send response
  res.status(200).json({
    status: 'success',
    user,
    message: 'User profile retrieved successfully',
  });
});
// @desc    Update user profile
// @route   PUT /api/v1/user/profile/update
// @access  Private
export const updateProfile = asyncHandler(async (req, res, next) => {
  // get user from request object
  const { _id } = req.user;
  const { name, gender } = req.body || {};

  const imageFile = req.file;

  if (!name || !gender)
    return next(new AppError('Please provide name and gender.', 400));
  // find user
  const user = await User.findById(_id);
  if (!user) return next(new AppError('User not found', 404));

  // update user
  if (name) user.name = name;
  if (gender) user.gender = gender;

  if (imageFile) user.image = `${ENV.URL}/${imageFile.filename}`;

  // save user
  await user.save();
  // send response
  res.status(200).json({
    status: 'success',
    user,
    message: 'User profile updated successfully',
  });
});

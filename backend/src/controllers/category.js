import AppError from '../middlewares/AppError.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import Category from '../models/Category.js';
// @desc    Create a category
// @route   POST /api/v1/categories
// @access  Private
export const createCategory = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(new AppError('Category name is required', 400));
  }

  // check if category already exists
  const categoryExists = await Category.findOne({ name });
  if (categoryExists) {
    return next(new AppError('Category already exists', 400));
  }

  const category = new Category({
    name,
  });

  await category.save();
  res.status(201).json({
    status: 'success',
    message: 'Category created successfully',
    category,
  });
});
// @desc    Update a category
// @route   PATCH /api/v1/categories/:id
// @access  Private
export const updateCategory = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(new AppError('Category name is required', 400));
  }

  // check if category already exists
  const categoryExists = await Category.findOne({ name });
  if (categoryExists) {
    return next(new AppError('Category already exists', 400));
  }

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!category) {
    return next(new AppError('Category not found', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'Category updated successfully',
    category,
  });
});
// @desc    Delete a category
// @route   DELETE /api/v1/categories/:id
// @access  Private
export const deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return next(new AppError('Category not found', 404));
  }
  res.status(200).json({
    status: 'success',
    message: 'Category deleted successfully',
  });
});
// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Public
// eslint-disable-next-line no-unused-vars
export const getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    status: 'success',
    message: 'Categories retrieved successfully',
    categories,
  });
});

export const getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new AppError('Category not found', 404));
  }
  res.status(200).json({
    status: 'success',
    message: 'Category retrieved successfully',
    category,
  });
});

import AppError from '../middlewares/AppError.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import Category from '../models/Category.js';

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

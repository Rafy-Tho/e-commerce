import ENV from '../configs/env.js';
import AppError from '../middlewares/AppError.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import Product from '../models/Product.js';
import AdvancedQuery from '../utils/AdvanceQuery.js';
// @desc    Add a new product
// @route   POST /api/v1/products
// @access  Private/Admin
export const addProduct = asyncHandler(async (req, res, next) => {
  const { name, brand, category, description, price, quantity } = req.body;
  const imageFile = req.file;
  if (
    !imageFile ||
    !name ||
    !brand ||
    !category ||
    !description ||
    !price ||
    !quantity
  ) {
    return next(new AppError('All fields are required', 400));
  }
  const product = new Product({
    name,
    image: `${ENV.URL}/${imageFile.filename}`,
    brand,
    category,
    description,
    quantity,
    price,
  });
  await product.save();
  res.status(201).json({
    status: 'success',
    message: 'Product added successfully',
    product,
  });
});
// @desc    Update a product
// @route   PUT /api/v1/products/:id
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, brand, category, description, price, quantity } = req.body;
  const imageFile = req.file;
  if (!name || !brand || !category || !description || !price || !quantity) {
    return next(new AppError('All fields are required', 400));
  }
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError('Product not found', 404));
  }
  product.name = name;
  product.brand = brand;
  product.category = category;
  product.description = description;
  product.price = price;
  product.quantity = quantity;
  if (imageFile) {
    product.image = `${ENV.URL}/${imageFile.filename}`;
  }
  await product.save();
  res.status(200).json({
    status: 'success',
    message: 'Product updated successfully',
    product,
  });
});
// @desc    Remove a product
// @route   DELETE /api/v1/products/:id
// @access  Private/Admin
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return next(new AppError('Product not found', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'Product removed successfully',
  });
});
// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
// eslint-disable-next-line no-unused-vars
export const getAllProducts = asyncHandler(async (req, res, next) => {
  const features = new AdvancedQuery(Product, req.query)
    .filter()
    .search('name')
    .sort()
    .limitFields();

  await features.paginate();

  const products = await features.query;

  res.status(200).json({
    status: 'success',
    pagination: features.pagination,
    results: products.length,
    products,
  });
});

export const getProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError('Product not found', 404));
  }
  res.status(200).json({
    status: 'success',
    product,
  });
});
// @desc    Add a review to a product
// @route   POST /api/v1/products/:id/reviews
// @access  Private/User
export const addReview = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  const product = await Product.findById(id);
  // Check if the product exists
  if (!product) {
    return next(new AppError('Product not found', 404));
  }
  // Check if the user has already reviewed the product
  const alreadyReviewed = product.reviews.find(
    (review) => review.user.toString() === req.user._id.toString(),
  );
  if (alreadyReviewed) {
    return next(new AppError('You have already reviewed this product', 400));
  }
  const review = {
    name: req.user.name,
    rating: Number(rating),
    comment,
    user: req.user._id,
  };
  // Add the review to the product
  product.reviews.push(review);
  product.numReviews = product.reviews.length;
  product.rating = (
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length
  ).toFixed(1);
  // Save the product
  await product.save();
  res.status(201).json({
    status: 'success',
    message: 'Review added successfully',
    product,
  });
});
// @desc    Get top rated products
// @route   GET /api/v1/products/top
// @access  Public
// eslint-disable-next-line no-unused-vars
export const getTopProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(5);
  res.status(200).json({
    status: 'success',
    message: 'Top products retrieved successfully',
    products,
  });
});

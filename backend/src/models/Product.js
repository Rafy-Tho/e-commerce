import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: {
      type: Number,
      required: true,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must be at most 5'],
    },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    // Store the path from the root uploads folder
    image: { type: String, required: [true, 'Product image is required'] },
    brand: { type: String, required: true },
    // Use 'quantity' or 'countInStock' consistently; usually countInStock is standard
    countInStock: { type: Number, required: true, default: 0, min: 0 },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);
export default Product;

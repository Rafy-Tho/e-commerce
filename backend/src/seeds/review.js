import connectDB from '../configs/database.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

connectDB();

const seedReviews = async () => {
  try {
    const users = await User.find({ isAdmin: false });
    const products = await Product.find({});

    if (users.length === 0 || products.length === 0) {
      console.log('No users or products found');
      process.exit();
    }

    for (const product of products) {
      // Clear existing reviews (optional)
      product.reviews = [];

      // Select random users (max 5 per product)
      const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 5);

      const reviews = randomUsers.map((user) => ({
        name: user.name,
        rating: Math.floor(Math.random() * 5) + 1, // 1 - 5
        comment: 'This is a great product! Highly recommended.',
        user: user._id,
      }));

      product.reviews = reviews;
      product.numReviews = reviews.length;

      product.rating =
        reviews.reduce((acc, item) => acc + item.rating, 0) / reviews.length;

      await product.save();
    }

    console.log('✅ Reviews seeded successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedReviews();

import mongoose from 'mongoose';
import ENV from '../configs/env.js';
import Product from '../models/Product.js';
import { products } from '../configs/products.js';

// Connect to MongoDB
mongoose
  .connect(ENV.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => {
    console.error('MongoDB connection failed ❌', err);
    process.exit(1);
  });

// Wait for connection, then seed
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // optional: remove existing products
    await Product.insertMany(products);
    console.log('Products seeded successfully ✅');
    process.exit();
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

mongoose.connection.once('open', () => {
  seedProducts();
});

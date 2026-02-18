import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './configs/database.js';
import ENV from './configs/env.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import notFound from './middlewares/notFound.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/user.js';
import productRouter from './routes/product.js';
import categoryRouter from './routes/category.js';

// configuration
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ENV.CLIENT_URL,
  }),
);
app.use(cookieParser());
// Connect to MongoDB
connectDB();
// static file image
app.use(express.static(path.join(__dirname, '../uploads')));
app.use(express.static(path.join(__dirname, '../public')));
// routes

app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/user', authRoutes);

// handle errors route
app.use(notFound);
app.use(errorMiddleware);

export default app;

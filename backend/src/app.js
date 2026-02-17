import express from 'express';
import cors from 'cors';
import notFound from './middlewares/notFound.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDB from './configs/database.js';
import ENV from './configs/env.js';
import path from 'path';
import { fileURLToPath } from 'url';

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
// Connect to MongoDB
connectDB();
// static file image
app.use(express.static(path.join(__dirname, '../uploads')));
// routes

// handle errors route
app.use(notFound);
app.use(errorMiddleware);

export default app;

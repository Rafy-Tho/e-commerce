import express from 'express';
import {
  addProduct,
  addReview,
  deleteProduct,
  getAllProducts,
  getProductById,
  getTopProducts,
  updateProduct,
} from '../controllers/product.js';
import { authenticate, authorize } from '../middlewares/auth.js';
import { upload } from '../middlewares/multer.js';

const productRouter = express.Router();
// Public routes
productRouter.get('/', getAllProducts);
productRouter.get('/top', getTopProducts);
productRouter.get('/:id', getProductById);
// all product routes require authentication
productRouter.use(authenticate);
productRouter.post('/:id/reviews', addReview);
// admin routes require admin role
productRouter.use(authorize('admin'));
productRouter.post('/', upload.single('image'), addProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.patch('/:id', upload.single('image'), updateProduct);

export default productRouter;

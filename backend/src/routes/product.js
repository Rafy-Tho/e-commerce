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

productRouter.get('/', getAllProducts);
productRouter.get('/top', getTopProducts);
productRouter.post(
  '/',
  authenticate,
  authorize('admin'),
  upload.single('image'),
  addProduct,
);
productRouter.delete('/:id', authenticate, authorize('admin'), deleteProduct);
productRouter.patch(
  '/:id',
  authenticate,
  authorize('admin'),
  upload.single('image'),
  updateProduct,
);
productRouter.get('/:id', getProductById);
productRouter.post('/:id/reviews', authenticate, addReview);
export default productRouter;

import express from 'express';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from '../controllers/category.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const categoryRouter = express.Router();

categoryRouter.post('/', authenticate, authorize('admin'), createCategory);
categoryRouter.get('/', getCategories);
categoryRouter.get('/:id', getCategory);
categoryRouter.patch('/:id', authenticate, authorize('admin'), updateCategory);
categoryRouter.delete('/:id', authenticate, authorize('admin'), deleteCategory);

export default categoryRouter;

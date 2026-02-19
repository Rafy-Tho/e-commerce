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
// Public route
categoryRouter.get('/', getCategories);
categoryRouter.get('/:id', getCategory);
// Admin routes
categoryRouter.use(authenticate, authorize('admin'));
categoryRouter.post('/', createCategory);
categoryRouter.patch('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;

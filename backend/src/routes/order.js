import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.js';
import {
  adminOrderDashboard,
  createOrder,
  getOrderById,
  getUserOrders,
  markOrderAsDelivered,
  markOrderAsPaid,
} from '../controllers/order.js';

const orderRouter = express.Router();

// User routes
orderRouter.use(authenticate);
orderRouter.post('/', createOrder);
orderRouter.get('/', getUserOrders);
// Admin routes
orderRouter.use(authorize('admin'));
orderRouter.get('/admin/dashboard', adminOrderDashboard);
orderRouter.get('/:id', getOrderById);
orderRouter.put('/:id/paid', markOrderAsPaid);
orderRouter.put('/:id/delivered', markOrderAsDelivered);

export default orderRouter;

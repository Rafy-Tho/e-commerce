import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.js';
import {
  adminOrderDashboard,
  createOrder,
  getAllOrders,
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
orderRouter.get('/:id', getOrderById);
// Admin routes
orderRouter.use(authorize('admin'));
orderRouter.get('/admin/dashboard', adminOrderDashboard);
orderRouter.get('/admin/orders', getAllOrders);
orderRouter.put('/:id/paid', markOrderAsPaid);
orderRouter.put('/:id/delivered', markOrderAsDelivered);

export default orderRouter;

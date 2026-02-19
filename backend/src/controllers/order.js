import AppError from '../middlewares/AppError.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import calcPrices from '../utils/calcPrices.js';
// @desc    Create a new order
// @route   POST /api/v1/orders
// @access  Private
export const createOrder = asyncHandler(async (req, res, next) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;

  if (!orderItems || !shippingAddress || !paymentMethod) {
    return next(new AppError('All fields are required', 400));
  }

  if (orderItems.length === 0) {
    return next(new AppError('Order items are required', 400));
  }

  const itemsFromDB = await Product.find({
    _id: { $in: orderItems.map((item) => item._id) },
  });

  if (itemsFromDB.length !== orderItems.length) {
    return next(new AppError('One or more items are not available', 400));
  }

  const dbOrderItems = orderItems.map((itemClient) => {
    const matchedItem = itemsFromDB.find(
      (itemDB) => itemDB._id.toString() === itemClient._id,
    );
    if (!matchedItem) {
      throw new AppError('Item not found', 404);
    }
    return {
      name: matchedItem.name,
      product: matchedItem._id,
      price: matchedItem.price,
      quantity: itemClient.quantity,
      image: matchedItem.image,
    };
  });
  const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
    calcPrices(dbOrderItems);
  const order = await Order.create({
    user: req.user._id,
    orderItems: dbOrderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });
  res.status(201).json({
    status: 'success',
    message: 'Order created successfully',
    order,
  });
});

// @desc    Get all orders
// @route   GET /api/v1/orders
// @access  Private/Admin
// eslint-disable-next-line no-unused-vars
export const getAllOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find().populate('user', 'name email');
  res.status(200).json({
    status: 'success',
    message: 'Orders retrieved successfully',
    orders,
  });
});
// @desc    Get user orders
// @route   GET /api/v1/orders/user
// @access  Private
// eslint-disable-next-line no-unused-vars
export const getUserOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    'user',
    'name email',
  );
  res.status(200).json({
    status: 'success',
    message: 'Orders retrieved successfully',
    orders,
  });
});

// @desc    Get admin order dashboard
// @route   GET /api/v1/orders/admin/dashboard
// @access  Private/Admin
// eslint-disable-next-line no-unused-vars
export const adminOrderDashboard = asyncHandler(async (req, res, next) => {
  const stats = await Order.aggregate([
    {
      $facet: {
        // 1️⃣ Total Orders
        totalOrders: [{ $count: 'count' }],

        // 2️⃣ Total Sales
        totalSales: [
          { $match: { isPaid: true } },
          {
            $group: {
              _id: null,
              total: { $sum: '$totalPrice' },
            },
          },
        ],

        // 3️⃣ Total Sales By Date (Paid Only)
        salesByDate: [
          {
            $match: { isPaid: true },
          },
          {
            $group: {
              _id: {
                $dateToString: {
                  format: '%Y-%m-%d',
                  date: '$paidAt',
                },
              },
              totalSales: { $sum: '$totalPrice' },
            },
          },
          { $sort: { _id: 1 } },
        ],
      },
    },
  ]);

  const result = {
    totalOrders: stats[0].totalOrders[0]?.count || 0,
    totalSales: stats[0].totalSales[0]?.total || 0,
    salesByDate: stats[0].salesByDate,
  };

  res.status(200).json({
    status: 'success',
    message: 'Orders retrieved successfully',
    result,
  });
});
// @desc    Get order by ID
// @route   GET /api/v1/orders/:id
// @access  Private/Admin
export const getOrderById = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email',
  );
  if (!order) {
    return next(new AppError('Order not found', 404));
  }
  res.status(200).json({
    status: 'success',
    message: 'Order retrieved successfully',
    order,
  });
});
// @desc    Mark order as paid
// @route   PUT /api/v1/orders/:id/paid
// @access  Private/Admin
export const markOrderAsPaid = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new AppError('Order not found', 404));
  }
  order.isPaid = true;
  order.paidAt = Date.now();
  await order.save();
  res.status(200).json({
    status: 'success',
    message: 'Order marked as paid successfully',
    order,
  });
});
// @desc    Mark order as delivered
// @route   PUT /api/v1/orders/:id/delivered
// @access  Private/Admin
export const markOrderAsDelivered = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new AppError('Order not found', 404));
  }
  order.isDelivered = true;
  order.deliveredAt = Date.now();
  await order.save();
  res.status(200).json({
    status: 'success',
    message: 'Order marked as delivered successfully',
    order,
  });
});

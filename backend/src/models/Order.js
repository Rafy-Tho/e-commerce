import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      index: true, // Faster lookups for "My Orders"
    },
    orderItems: [
      {
        type: [
          {
            name: { type: String, required: true },
            quantity: {
              type: Number,
              required: true,
              min: [1, 'Quantity must be at least 1'],
            },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
              type: mongoose.Schema.Types.ObjectId,
              required: true,
              ref: 'Product',
            },
          },
        ],
        validate: [(v) => v.length > 0, 'Order must have at least one item'],
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      zipCode: { type: String, required: true },
      state: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['PayPal', 'Stripe', 'Cash'], // Restrict to supported methods
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    // Financial fields
    itemsPrice: { type: Number, required: true, default: 0.0 },
    taxPrice: { type: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },

    // Status Trackers
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true },
);

const Order = mongoose.model('Order', orderSchema);
export default Order;

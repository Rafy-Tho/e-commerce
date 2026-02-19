import { createSlice } from '@reduxjs/toolkit';

const saveToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : {
      cartItems: [],
      shippingAddress: {},
      paymentMethod: 'Stripe',
    };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((i) => i._id === item._id);

      if (existItem) {
        if (existItem.OrderQty < existItem.quantity) {
          existItem.OrderQty++;
        }
      } else {
        state.cartItems.push({
          ...item,
          OrderQty: 1,
        });
      }

      saveToLocalStorage(state);
    },

    incrementQuantity: (state, action) => {
      const productId = action.payload;

      const existItem = state.cartItems.find((i) => i._id === productId);

      if (existItem && existItem.OrderQty < existItem.quantity) {
        existItem.OrderQty++;
      }

      saveToLocalStorage(state);
    },

    decrementQuantity: (state, action) => {
      const productId = action.payload;

      const existItem = state.cartItems.find((i) => i._id === productId);

      if (!existItem) return;

      if (existItem.OrderQty > 1) {
        existItem.OrderQty--;
      } else {
        state.cartItems = state.cartItems.filter((i) => i._id !== productId);
      }

      saveToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
      saveToLocalStorage(state);
    },

    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      saveToLocalStorage(state);
    },

    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setShippingAddress,
  setPaymentMethod,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

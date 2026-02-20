import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../services/FEATURE/cartSlice';

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.OrderQty, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 5;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="  bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h2 className="text-gray-900 dark:text-white text-2xl font-semibold">
          Your Drink Cart
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Review your favorite beverages before checkout.
        </p>
      </div>

      {/* Cart Items Section */}
      <div className="grid lg:grid-cols-3 gap-10 mt-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item._id}>
              <div className="grid grid-cols-2 sm:grid-cols-3 items-start sm:gap-4 gap-6">
                <div className="col-span-2 flex items-start gap-4">
                  {/* Product Image */}
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col">
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wide">
                      {item.brand}
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>

                    {/* Remove Button */}
                    <button
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="mt-3 font-semibold text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-xs flex items-center gap-2 shrink-0 cursor-pointer transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                      </svg>
                      REMOVE
                    </button>
                  </div>
                </div>

                {/* Price and Quantity */}
                <div className="sm:ml-auto max-sm:flex max-sm:justify-between max-sm:gap-4 max-sm:col-span-full">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                    ${(item.price * item.OrderQty).toFixed(2)}
                  </h4>

                  {/* Quantity Controls */}
                  <div className="flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-xs font-medium rounded-lg sm:mt-6 bg-white dark:bg-gray-800">
                    <button
                      onClick={() => dispatch(decrementQuantity(item._id))}
                      className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      disabled={item.quantity === 1}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2.5 fill-current"
                        viewBox="0 0 124 124"
                      >
                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                      </svg>
                    </button>

                    <span className="mx-3 min-w-[20px] text-center">
                      {item.OrderQty}
                    </span>

                    <button
                      onClick={() => dispatch(incrementQuantity(item._id))}
                      className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2.5 fill-current"
                        viewBox="0 0 42 42"
                      >
                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {cartItems.indexOf(item) < cartItems.length - 1 && (
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              )}
            </div>
          ))}
        </div>

        {/* Checkout Summary */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-max">
          {/* Price Breakdown */}
          <ul className="text-gray-600 dark:text-gray-400 font-medium mt-6 space-y-3">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal
              <span className="ml-auto font-semibold text-gray-900 dark:text-white">
                ${subtotal.toFixed(2)}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Shipping
              <span className="ml-auto font-semibold text-gray-900 dark:text-white">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax (8%)
              <span className="ml-auto font-semibold text-gray-900 dark:text-white">
                ${tax.toFixed(2)}
              </span>
            </li>
            <hr className="border-gray-200 dark:border-gray-700 my-3" />
            <li className="flex flex-wrap gap-4 text-base font-semibold text-gray-900 dark:text-white">
              Total
              <span className="ml-auto text-amber-600 dark:text-amber-400">
                ${total.toFixed(2)}
              </span>
            </li>
          </ul>

          {/* Free shipping message */}
          {shipping === 0 && (
            <div className="mt-3 p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-center">
              <p className="text-xs text-amber-600 dark:text-amber-400">
                🎉 Free shipping
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <Link
              to={'/order-details'}
              className="w-full px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg block "
            >
              Proceed to Checkout
            </Link>
            <Link
              to={'/products'}
              className="w-full px-4 py-3 bg-transparent text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-amber-600 dark:hover:border-amber-500 rounded-lg font-semibold transition-all duration-300 block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

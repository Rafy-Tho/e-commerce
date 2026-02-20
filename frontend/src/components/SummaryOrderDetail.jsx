import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setShippingAddress } from '../services/FEATURE/cartSlice';

function SummaryOrderDetail({ details }) {
  const navigate = useNavigate();
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
    <div className="lg:sticky lg:top-4 h-fit">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl text-gray-900 dark:text-white font-semibold mb-6">
          Order Summary
        </h2>

        <ul className="space-y-4">
          <li className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
            <span className="ml-auto font-semibold text-gray-900 dark:text-white">
              ${subtotal.toFixed(2)}
            </span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Shipping</span>
            <span className="ml-auto font-semibold text-gray-900 dark:text-white">
              ${shipping.toFixed(2)}
            </span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Tax</span>
            <span className="ml-auto font-semibold text-gray-900 dark:text-white">
              ${tax.toFixed(2)}
            </span>
          </li>

          <hr className="border-gray-300 dark:border-gray-600 my-4" />

          <li className="flex flex-wrap gap-4 text-base font-bold">
            <span className="text-gray-900 dark:text-white">Total</span>
            <span className="ml-auto text-amber-600 dark:text-amber-400">
              ${total.toFixed(2)}
            </span>
          </li>
        </ul>

        {/* Order Items Preview */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Your Items
          </h3>
          <div className="space-y-3 overflow-scroll h-45 cursor-pointer">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-3  ">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Qty: {item.OrderQty} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  ${(item.price * item.OrderQty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mt-8">
          <button
            type="button"
            onClick={() => {
              dispatch(setShippingAddress(details));
              navigate('/order-payment');
            }}
            className="w-full px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Complete Purchase
          </button>
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default SummaryOrderDetail;

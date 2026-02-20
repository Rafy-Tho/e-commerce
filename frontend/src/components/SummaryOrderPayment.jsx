import { useSelector } from 'react-redux';

function SummaryOrderPayment() {
  const { cartItems, shippingAddress } = useSelector((state) => state.cart);

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.OrderQty, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 5;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div>
      {/* Order Summary */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Order Summary
        </h3>

        <ul className="space-y-3">
          <li className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Subtotal</span>
            <span className="font-medium text-gray-900 dark:text-white">
              ${subtotal.toFixed(2)}
            </span>
          </li>

          <li className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Shipping</span>
            <span className="font-medium text-gray-900 dark:text-white">
              ${shipping.toFixed(2)}
            </span>
          </li>
          <li className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Tax</span>
            <span className="font-medium text-gray-900 dark:text-white">
              ${tax.toFixed(2)}
            </span>
          </li>

          <hr className="border-gray-200 dark:border-gray-700 my-3" />

          <li className="flex justify-between text-base font-semibold text-gray-900 dark:text-white">
            <span>Total</span>
            <span className="text-amber-600 dark:text-amber-400">
              ${total.toFixed(2)}
            </span>
          </li>
        </ul>
      </div>
      {/* Shipping Address */}
      <div className="mt-6">
        <h4 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-3">
          Shipping Address
        </h4>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4 text-amber-600 dark:text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {shippingAddress.email}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {shippingAddress.address} , {shippingAddress.postalCode},{' '}
                {shippingAddress.state}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {shippingAddress.city} {shippingAddress.zipCode} ,
                {shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Method */}
      <div className="mt-6">
        <h4 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-3">
          Shipping Method
        </h4>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4 text-amber-600 dark:text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Express Shipping
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Estimated delivery:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryOrderPayment;

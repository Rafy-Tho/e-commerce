import { useState } from 'react';

function OrderPaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: 'Rafy Tho',
    cardNumber: '4242 4242 4242 4242',
    expiry: '12/25',
    cvv: '123',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlePayment = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      {/* Payment Methods */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Card Payment Option */}
        <div
          className={`bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-2 cursor-pointer transition-all ${
            paymentMethod === 'card'
              ? 'border-amber-500 dark:border-amber-400 shadow-md'
              : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600'
          }`}
          onClick={() => setPaymentMethod('card')}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="method"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
              className="w-5 h-5 cursor-pointer text-amber-600 focus:ring-amber-500"
            />
            <label className="ml-4 flex gap-2 cursor-pointer">
              <img
                src="https://readymadeui.com/images/visa.webp"
                className="w-12 h-auto"
                alt="Visa"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                className="w-12 h-auto"
                alt="American Express"
              />
              <img
                src="https://readymadeui.com/images/master.webp"
                className="w-12 h-auto"
                alt="Mastercard"
              />
            </label>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
            Pay with debit or credit card
          </p>
        </div>

        {/* PayPal Option */}
        <div
          className={`bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-2 cursor-pointer transition-all ${
            paymentMethod === 'paypal'
              ? 'border-amber-500 dark:border-amber-400 shadow-md'
              : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600'
          }`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="method"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className="w-5 h-5 cursor-pointer text-amber-600 focus:ring-amber-500"
            />
            <label className="ml-4 flex gap-2 cursor-pointer">
              <img
                src="https://readymadeui.com/images/paypal.webp"
                className="w-20 h-auto"
                alt="PayPal"
              />
            </label>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
            Pay with your PayPal account
          </p>
        </div>
      </div>

      {/* Card Details Form - Only show if card is selected */}
      {paymentMethod === 'card' && (
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 mt-8">
          <div className="max-lg:col-span-full">
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="max-lg:col-span-full">
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
      )}

      {/* PayPal Details - Only show if PayPal is selected */}
      {paymentMethod === 'paypal' && (
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72c.045-.3.3-.528.61-.578.02-.002.04-.003.06-.003h5.722c3.657 0 6.143 2.287 6.338 5.476.097 1.62-.416 3.166-1.444 4.347-1.027 1.182-2.57 1.876-4.34 1.953-.165.007-.33.011-.495.011H7.414l-.378 2.401-.31 1.974a.646.646 0 0 1-.64.536z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-semibold">
                PayPal Checkout
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                You'll be redirected to PayPal to complete your purchase
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pay Now Button */}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePayment}
          className="cursor-pointer rounded-lg px-4 py-3 w-full text-sm font-semibold tracking-wide bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          Pay Now
        </button>
      </div>

      {/* Secure Payment Badge */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Secure 256-bit SSL encrypted payment</span>
      </div>
    </div>
  );
}

export default OrderPaymentForm;

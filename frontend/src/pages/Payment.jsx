import OrderPaymentForm from '../components/OrderPaymentForm';
import OrderStep from '../components/OrderStep';
import SummaryOrderPayment from '../components/SummaryOrderPayment';

const Payment = () => {
  return (
    <div className="bg-white dark:bg-gray-900 sm:px-8 px-4 py-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center ">
          Payment Details
        </h2>
        <OrderStep currentStep={3} />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Payment Form */}
          <OrderPaymentForm />
          {/* Right Column - Order Summary */}
          <SummaryOrderPayment />
        </div>
      </div>
    </div>
  );
};

export default Payment;

import { useState } from 'react';

import OrderStep from '../components/OrderStep';
import { useSelector } from 'react-redux';
import FormOrderDetail from '../components/FormOrderDetail';
import SummaryOrderDetail from '../components/SummaryOrderDetail';
const initialFormData = {
  country: '',
  postalCode: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
};
const OrderDetailPage = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState(shippingAddress || initialFormData);
  return (
    <div className="bg-white dark:bg-gray-900 sm:px-8 px-4 py-6">
      <div className="max-w-screen-xl max-md:max-w-xl mx-auto">
        {/* Progress Steps */}
        <OrderStep currentStep={2} />
        {/* Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
          {/* Left Column - Delivery & Payment */}
          <div className="lg:col-span-2">
            <FormOrderDetail setFormData={setFormData} formData={formData} />
          </div>
          {/* Right Column - Order Summary */}
          <SummaryOrderDetail details={formData} />
        </div>
      </div>
    </div>
  );
};
export default OrderDetailPage;

function FormOrderDetail({ formData, setFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      {/* Delivery Details */}
      <div>
        <h2 className="text-xl text-gray-900 dark:text-white font-semibold mb-6">
          Delivery Details
        </h2>
        <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Enter country"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              placeholder="Enter postal code"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Phone No.
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter street address"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter city"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter state"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white font-medium block mb-2">
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Enter zip code"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormOrderDetail;

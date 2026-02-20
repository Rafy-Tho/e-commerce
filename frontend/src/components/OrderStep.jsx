const OrderStep = ({ currentStep }) => {
  const steps = [
    { id: 1, title: 'Cart' },
    { id: 2, title: 'Details' },
    { id: 3, title: 'Payment' },
  ];

  return (
    <div className="flex mb-12">
      {steps.map((step, index) => (
        <div key={step.id} className="w-full">
          <div className="flex items-center w-full">
            {/* Circle */}
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] p-1.5 flex items-center justify-center rounded-full 
              ${
                currentStep >= step.id
                  ? 'bg-amber-600'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span className="text-sm text-white font-semibold">
                {step.id}
              </span>
            </div>

            {/* Line (not for last step) */}
            {index !== steps.length - 1 && (
              <div
                className={`w-full h-[3px] mx-4 rounded-lg 
                ${
                  currentStep > step.id
                    ? 'bg-amber-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              ></div>
            )}
          </div>

          {/* Title */}
          <div className="mt-2 mr-4">
            <h6
              className={`text-sm font-semibold 
              ${
                currentStep >= step.id
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              {step.title}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStep;

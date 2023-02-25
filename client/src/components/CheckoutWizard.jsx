import React from 'react';

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Shipping Address', 'payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={index}
            className={`flex-1 mt-11  text-center text-[12px] font-bold md:text-lg border-b-4 ${
              index <= activeStep
                ? 'border-b-[#1e3639]  text-[#1e3639]'
                : 'border-gray-400 text-gray-400'
            }`}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutWizard;

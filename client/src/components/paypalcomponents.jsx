import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import React, { useState } from 'react';

const Paypalcomponents = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Sunflower',
            amount: {
              currency_code: 'KES',
              value: 20,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: 'NO_SHIPPING',
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage('An Error occured with your payment ');
  };
  return (
    <div>
      <PayPalScriptProvider
        options={{
          'client-id':
            'Adv94ZaV9_MkuC1yw1QOUtpgyTM9lKpTUSa2BrLoHAhfGeJvlfrnCwapo7jyK5drtIce7a_HVAY0Oq7v',
        }}
      >
        <PayPalButtons style={{ layout: 'vertical' }} />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypalcomponents;

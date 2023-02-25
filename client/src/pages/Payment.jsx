import React, { useState } from 'react';
import { useEffect } from 'react';
import { IoIosCheckmark, IoMdCheckmarkCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { paymentInfo } from '../assets/paymentData';
import CheckoutWizard from '../components/CheckoutWizard';
import { setThePaymentMethod } from '../Features/slices/shippingDetails';

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo, paymentMethod } = useSelector((state) => ({
    ...state.shipping,
  }));
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();
  const handlePaymentMethod = (e) => {
    e.preventDefault();
    dispatch(setThePaymentMethod(selectedPaymentMethod));

    navigate('/placeorder');
  };
  useEffect(() => {
    if (!shippingInfo) {
      navigate('/shippingscreen');
    }
    setSelectedPaymentMethod(paymentMethod);
  }, []);
  console.log(paymentInfo);
  return (
    <div className=" pb-24     bg-[#dadde3]">
      <CheckoutWizard activeStep="2" />
      <h1 className="font-bold uppercase tracking-wider mb-4 mt-6 ml-11 ">
        Choose <span className="text-[#d1b112]">A payment </span>Method
      </h1>
      <div className="flex flex-col md:flex-row max-w-7xl  mx-auto bg-white   gap-24 shadow-lg">
        <div className="md:bg-[#1e3639] w-80 md:w-[900px] mx-auto">
          <img src="./assets/checkoutimage.png" alt="payment" />
        </div>
        <form action="" className="w-full" onSubmit={handlePaymentMethod}>
          <div className="w-[90%] justify-center md:w-3/4 flex flex-col mx-auto">
            {paymentInfo.map((payment, index) => (
              <label
                key={index}
                htmlFor={payment?.method}
                className="relative mx-auto   w-3/4 cursor-pointer m-7"
              >
                <input
                  className="peer hidden"
                  type="radio"
                  id={payment?.method}
                  name="payment"
                  checked={selectedPaymentMethod === payment?.method}
                  onChange={() => setSelectedPaymentMethod(payment?.method)}
                />
                <div className="payment-content">
                  <img
                    className="object-contain h-16 "
                    src={payment?.imagePath}
                    alt={payment?.method}
                  />
                  <p className="payment-text">{payment.method}</p>
                </div>
                <div className="payment-check">
                  <IoMdCheckmarkCircle />
                </div>
              </label>
            ))}
            <div className="flex justify-between items-center mb-7">
              <Link to="/shippingscreen">
                <button className="bg-[#d3d2cb] px-3 cursor-pointer no-wrap font-bold text-[#1e3639] py-2 active:scale-105 w-40 transition-all duration-300">
                  Prev
                </button>
              </Link>
              <button
                type="submit"
                className="bg-[#d1b112] px-3 cursor-pointer no-wrap font-bold text-[#dadde3] py-2 active:scale-105 w-40 transition-all duration-300"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;

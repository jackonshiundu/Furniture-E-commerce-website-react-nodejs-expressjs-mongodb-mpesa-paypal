import React, { useEffect } from 'react';
import CheckoutWizard from '../components/CheckoutWizard';
import PhoneInput from 'react-phone-number-input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShippingDetailToCart } from '../Features/slices/shippingDetails';
const initialState = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  county: '',
};
const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => ({ ...state.shipping }));
  const [phoneNumber, setPhoneNumber] = useState();
  const [formData, setFormData] = useState(shippingInfo);

  const { fullName, address, city, phone, postalCode, country, county } =
    formData;
  const handleInputCHange = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const entireFormdata = { ...formData, phone: phoneNumber };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addShippingDetailToCart(entireFormdata));
    setFormData(initialState);
    setPhoneNumber('');
    navigate('/payment');
  };
  useEffect(() => {
    setPhoneNumber(phone);
  }, []);
  return (
    <div className="bg-[#dadde3] pb-20">
      <CheckoutWizard activeStep="1" />
      <form
        onSubmit={handleSubmit}
        className="w-3/4 mx-auto bg-white shadow-lg mt-11 p-11"
      >
        <h1 className="mb-4 text-xl"> </h1>
        <h1 className="font-bold uppercase tracking-wider mb-4 mt-6 ">
          Shipping <span className="text-[#d1b112]">Adress </span>
        </h1>
        <div className="flex  gap-4 md:gap-11 justify-between w-full mb-4 text-xl items-center font-semibold">
          <label
            htmlFor="fullName"
            className="flex-1 h-full text-sm text-bottom"
          >
            Full Name
          </label>
          <input
            type="name"
            name="fullName"
            id="fullName"
            required
            value={fullName}
            onChange={handleInputCHange}
            className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
          />
        </div>
        <div className="flex  gap-4 md:gap-11 justify-between w-full mb-4 text-xl items-center font-semibold">
          <label
            htmlFor="phoneNumber"
            className="flex-1 h-full text-sm text-bottom"
          >
            Phone Number
          </label>
          <PhoneInput
            id="phoneNumber"
            required
            value={phoneNumber}
            onChange={setPhoneNumber}
            className="flex-3 flex w-3/4  outline-0   mb-4  outline-0"
          />
        </div>
        <div className="flex  gap-4 md:gap-11 mb-4 justify-between w-full text-xl mb-4 items-center font-semibold">
          <label
            htmlFor="address"
            className="flex-1 h-full text-sm text-bottom"
          >
            Address
          </label>
          <input
            type="name"
            name="address"
            id="address"
            required
            value={address}
            onChange={handleInputCHange}
            className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
          />
        </div>
        <div className="flex  gap-4 md:gap-11 justify-between w-full text-xl mb-4 items-center font-semibold">
          <label htmlFor="city" className="flex-1 h-full text-sm text-bottom">
            City
          </label>
          <input
            type="name"
            name="city"
            id="city"
            required
            value={city}
            onChange={handleInputCHange}
            className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
          />
        </div>
        <div className="flex gap-4 md:gap-11 justify-between mb-4 w-full text-xl items-center font-semibold">
          <label
            htmlFor="postalCode"
            className="flex-1 h-full text-sm text-bottom"
          >
            Postal Code
          </label>
          <input
            type="name"
            name="postalCode"
            id="postalCode"
            required
            value={postalCode}
            onChange={handleInputCHange}
            className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
          />
        </div>
        <div className="flex gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
          <label
            htmlFor="country"
            className="flex-1 h-full text-sm text-bottom"
          >
            Country
          </label>
          <input
            type="name"
            name="country"
            id="country"
            required
            value={country}
            onChange={handleInputCHange}
            className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
          />
        </div>
        <div className="flex gap-4 mt-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
          <label htmlFor="county" className="flex-1 h-full text-sm text-bottom">
            County
          </label>
          <input
            type="name"
            name="county"
            id="county"
            required
            value={county}
            onChange={handleInputCHange}
            className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
          />
        </div>
        <div className="mt-5 flex justify-between">
          <Link to="/cart">
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
      </form>
    </div>
  );
};

export default ShippingScreen;

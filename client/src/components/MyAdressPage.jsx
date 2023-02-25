import React from 'react';
import { useSelector } from 'react-redux';

const MyAdressPage = () => {
  const { shippingInfo } = useSelector((state) => ({ ...state.shipping }));
  const { address, city, country, county, phone, postalCode } = shippingInfo;
  return (
    <div className=" pl-7 pt-8 md:pl-14  md:pt-14 w-full pr-4">
      <h1 className="font-bold text-2xl ">My Address Book</h1>
      <p className="font-bold mt-5 mb-5 tracking-widest">Adress</p>
      <div className="w-full h-[0.5px] mb-6 bg-gray-400"></div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 mb-3">
          <h4 className="font-bold text-[#d1b112] w-32">Country:</h4>
          <span className="bg-gray-300 py-1 px-6 w-44 tracking-widest">
            {country}
          </span>
        </div>
        <div className="flex gap-4 mb-3">
          <h4 className="font-bold text-[#d1b112] w-32">City:</h4>
          <span className="bg-gray-300 py-1 px-6 w-44 tracking-widest">
            {city}
          </span>
        </div>
        <div className="flex gap-4 mb-3">
          <h4 className="font-bold text-[#d1b112] w-32">County:</h4>
          <span className="bg-gray-300 py-1 px-6 w-44 tracking-widest">
            {county}
          </span>
        </div>
        <div className="flex gap-4 mb-3">
          <h4 className="font-bold text-[#d1b112] w-32">Address:</h4>
          <span className="bg-gray-300 py-1 px-6 w-44 tracking-widest">
            {address}
          </span>
        </div>
        <div className="flex gap-4 mb-3">
          <h4 className="font-bold text-[#d1b112] w-32">PostalCode:</h4>
          <span className="bg-gray-300 py-1 px-6 w-44 tracking-widest">
            {postalCode}
          </span>
        </div>
        <div className="flex gap-4 mb-11">
          <h4 className="font-bold text-[#d1b112] w-32">Phone Number:</h4>
          <span className="bg-gray-300 py-1 px-6 w-44 tracking-widest">
            {phone}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyAdressPage;

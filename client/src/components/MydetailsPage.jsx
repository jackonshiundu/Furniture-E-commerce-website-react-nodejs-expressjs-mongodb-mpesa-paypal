import React from 'react';
import { useSelector } from 'react-redux';

const MydetailsPage = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { email, name, role } = user.result;
  const { shippingInfo } = useSelector((state) => ({ ...state.shipping }));
  const { phone } = shippingInfo;
  return (
    <div className=" pl-7 pt-8 md:pl-14  md:pt-14 w-full pr-4">
      <h1 className="font-bold text-2xl ">My Details</h1>
      <p className="font-bold mt-5 mb-5 tracking-widest">
        Parsonal Information
      </p>
      <div className="w-full h-[0.5px] mb-6 bg-gray-400"></div>
      <div className="flex gap-4 mb-3">
        <h4 className="font-bold text-[#d1b112] w-32 "> Fist Name</h4>
        <span className="bg-gray-300 py-1 px-6 w-28 tracking-widest">
          {name.split(' ')[0]}
        </span>
      </div>
      <div className="flex gap-4 mb-3">
        <h4 className="font-bold text-[#d1b112] w-32"> Last Name</h4>
        <span className="bg-gray-300 py-1 px-6 w-28 tracking-widest">
          {name.split(' ')[1]}
        </span>
      </div>
      <div className="flex gap-4 mb-3">
        <h4 className="font-bold text-[#d1b112] w-32">Role:</h4>
        <span className="bg-gray-300 py-1 px-6 w-28 tracking-widest">
          {role}
        </span>
      </div>
      <p className="font-bold mt-5 mb-5">Contacts </p>
      <div className="w-full h-[0.5px] mb-6 text-xl bg-gray-400"></div>
      <div className="pb-8 ">
        <h4 className="font-bold text-[#d1b112]"> E-mail</h4>
        <span className="tracking-widest">{email}</span>
      </div>
      <div className="pb-8 ">
        <h4 className="font-bold text-[#d1b112]"> Phone Number</h4>
        <span className="tracking-widest">{phone}</span>
      </div>
    </div>
  );
};

export default MydetailsPage;

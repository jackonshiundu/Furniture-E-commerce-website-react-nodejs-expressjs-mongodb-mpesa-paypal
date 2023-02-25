import React from 'react';

const Footer = () => {
  return (
    <div className=" relative bottom-0 bg-[#1e3639]  flex justify-center items-center flex-col ">
      <div className="flex justify-around text-sm   w-screen pt-11 pb-3">
        <div className="flex flex-col ">
          <h6 className="text-[#565b64] font-bold uppercase">About</h6>
          <span className="text-[#dadde3]">Contact Us</span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            About Us
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Careers
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Press
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Corparate Information
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="text-[#565b64] font-bold uppercase">help</h6>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Report Infringement
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Payment
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Shopping
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            FAQ
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="text-[#565b64] font-bold uppercase">Policy</h6>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Return Policy
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Terms Of Use
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Security
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Press
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Policy Information
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="text-[#565b64] font-bold uppercase">Social</h6>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Facebook
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Twitter
          </span>
          <span className="text-[#dadde3] cursor-pointer hover:underline transition duration-300">
            Youtube
          </span>
        </div>
      </div>
      <span className="w-screen h-[1px] bg-[#dadde3]"></span>
      <div className="flex gap-2 justify-around text-[#dadde3]  items-center text-[10px] h-10  w-screen">
        <div>
          <span>Advertise </span>
        </div>
        <div>
          <span>Gift Cards </span>
        </div>
        <div>
          <span>Help Center </span>
        </div>
        <div>
          <span>&copy;2022-2023 fruniture.com </span>
        </div>
        <div className="flex gap-3">
          <span>M-pesa</span>
          <span>Stripe</span>
          <span>Paypal</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

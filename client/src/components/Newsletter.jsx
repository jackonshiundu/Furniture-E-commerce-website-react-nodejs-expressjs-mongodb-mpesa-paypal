import React from 'react';

const Newsletter = () => {
  return (
    <div className="h-64 bg-[#1e3639] flex justify-center items-center flex-col gap-11">
      <h2 className="text-3xl md:text-5xl text-[#dadde3] font-bold">
        Subscribe to Our{' '}
        <span className="text-[#d1b112]"> Daily NewsLetter</span>
      </h2>
      <div className="flex gap-0">
        <input
          type="email"
          name="email"
          placeholder="subscribe@gmail.com"
          className="w-11/12 md:w-96  p-3 border-0 outline-0 focus:border-2 border-[#d1b112] bg-[#dadde3]"
        />
        <button className="bg-[#d1b112] px-3 font-bold text-[#dadde3] active:scale-105 transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

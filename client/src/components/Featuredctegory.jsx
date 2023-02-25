import React, { useState, useEffect } from 'react';
import { featuredcategory } from '../assets/featuredcategory';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Featuredctegory = () => {
  const [medium, setMedium] = useState(window.innerWidth);
  const [number, setNumber] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: number,
    slidesToScroll: 1,
  };
  const handleCategoryNumber = () => {
    setMedium(window.innerWidth);
    if (medium > 1024) {
      setNumber(3);
    } else if (medium > 850) {
      setNumber(2);
    } else {
      setNumber(1);
    }
  };

  window.addEventListener('resize', handleCategoryNumber);
  return (
    <div id="featured" className="bg-[#dadde3] h-screen pt-10 md:pt-28">
      <div className="  text-4xl text-center font-bold mb-12">
        <h1 className="text-[#d1b112]">
          Featured <span className="text-black">Categories</span>
        </h1>
      </div>
      <Slider
        {...settings}
        className="mx-auto h-[320px]   justify-center w-[90%]"
      >
        {featuredcategory.map((item, index) => (
          <div key={index} className="h-[302px]">
            <div className="relative  overflow-hidden shadow-md hover:shadow-lg mx-5  h-full cursor-pointer hover:scale-110 transition-all duration-500">
              <button className="absolute z-20 m-5 right-0 center bg-red-600  text-white font-bold p-2">
                {item.meta}
              </button>

              <button className="absolute bottom-4 left-4 z-20 border-4 px-3 border-[#d1b112] sm:text-[rgb(218,221,227)] shadow-md hover:shadow-2xl transition duration-300 active:scale-105">
                Buy Now
              </button>
              <div className="absolute  z-10 bg-[#1e3639]  top-24 w-[30rem] h-[302px] -left-52  items-stretch w-24 rotate-45 "></div>
              <div className="w-24 absolute z-20 left-4    bottom-24 text-white font-bold">
                <p>{item.description}</p>
              </div>
              <img
                src={item.image}
                alt={item.description}
                loading="lazy"
                className="h-full"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Featuredctegory;

import React from 'react';
import { testimonials } from '../assets/testimonials';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-[30rem] w-screen bg-[#dadde3] pt-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl  font-bold mb-24">Testimonials</h2>
      <div className="w-3/4">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className=" mx-auto shadow-lg bg-white mb-4 p-5">
              <div className="flex items-center">
                <span className="w-10 h-10 rounded-full mr-5 bg-[#1e3639] text-white flex justify-center items-center">
                  {item.name.split(' ')[0].substring(0, 1)}
                </span>
                <h6 className="font-bold">{item.name}</h6>
              </div>
              <div className="mt-3 italic ">
                <q>{item.message}</q>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

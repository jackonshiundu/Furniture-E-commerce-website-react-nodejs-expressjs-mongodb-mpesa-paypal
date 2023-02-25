import React, { useState } from 'react';
import { Images } from '../assets/carouselImages';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Features/slices/menuSlice';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Features/slices/productslice';
const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === Images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div className="flex flex-col " onClick={() => dispatch(closeMenu())}>
        <div>
          <div className="absolute top-0 -z-50">
            <div>
              <img
                src="./assets/fullsetseater.jpg"
                alt="fullsetseater"
                loading="lazy"
                className=" sm:h-screen  object-cover w-screen"
              />
            </div>
            <div className="absolute top-0  bg-[#1e3639] h-full opacity-60 sm:h-screen  object-cover w-screen "></div>
          </div>
          <div className="absolute left-4 top-56 md:top-64 lg:top-72 bg-[rgba(218,221,227,0.4)] active:scale-110 cursor-pointer transition duration-300 text-[#d1b112] rounded-full p-2 hover:ring-2">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="m-auto w-[65%] sm:w-3/4 md:w-1/2 overflow-hidden mt-5 transition-all duration-500 z-index ">
            <img
              src={Images[currentIndex].url}
              alt={Images[currentIndex].name}
              loading="lazy"
              className="object-cover "
            />
          </div>
          <div className="absolute  right-4 top-56 md:top-64 lg:top-80 bg-[rgba(218,221,227,0.4)] active:scale-110  flex text-[#d1b112] rounded-full p-2 hover:ring-2 transition duration-300 cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
        <div className="sm:absolute  sm:top-24 md:top-36 lg:top-44 sm:left-8 md:left-32 lg:left-64">
          <div className="mt-11 mx-auto mx-11">
            <div className="text-5xl lg:text-6xl">
              <h3>Find</h3>
              <h3 className="text-[#d1b112]">Yourself</h3>
              <h3>Our Finest</h3>
            </div>
            <div className="text-xl mt-6  font-bold">
              <Link
                to="buyfurnitures"
                onClick={() => dispatch(getAllProducts())}
              >
                <button className=" border-4 px-3 border-[#d1b112] sm:text-[rgb(218,221,227)] shadow-md hover:shadow-2xl transition duration-300 active:scale-105">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;

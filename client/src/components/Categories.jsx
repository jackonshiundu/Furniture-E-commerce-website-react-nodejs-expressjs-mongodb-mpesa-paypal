import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../assets/categories';
import { getAllProducts } from '../Features/slices/productslice';
import { useDispatch } from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch();
  const handleGetProducts = (index) => {
    switch (index) {
      case 0:
        dispatch(getAllProducts());
        break;

      default:
        break;
    }
  };
  return (
    <div className="mt-24 h-fit max-h-fit bg-[#404144] p-10">
      <div className=" mt-10 text-4xl text-center font-bold mb-12">
        <h1 clas>
          Shop By <span className="text-[#d1b112]">Categories</span>
        </h1>
      </div>
      <div className="md:flex flex-wrap justify-around">
        {categories.map((item, index) => (
          <Link
            key={index}
            to={`${item.routes}`}
            className=" sm:hover:bg-[#1e3639] sm:hover:shadow-lg sm:hover:scale-105 active:scale-105 shadow-md cursor-pointer pt-10 w-10/12 h- md:w-52 lg:w-[30%] flex items-center   text-[#dadde3] font-bold md:font-semibold text-2xl  bg-white mx-auto mt-5 p-7 transition-all duration-300 "
            onClick={() => handleGetProducts(index)}
          >
            <div className="flex-1">
              <h5>View All</h5>
              <h5>
                {item?.brand}{' '}
                <span className="text-[#d1b112]">({item?.NumberinStore})</span>
              </h5>
            </div>
            <div className="flex-1 w-full min-h-fit overflow-hidden">
              <img
                src={item.image}
                alt={item.brand}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

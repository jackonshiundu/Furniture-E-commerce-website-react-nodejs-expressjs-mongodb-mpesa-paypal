import React, { useState } from 'react';
import {
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsTruckFlatbed,
} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearFilter,
  sortByBrand,
  sortByColor,
  sortByPrice,
  sortByRatings,
  sortByStock,
} from '../Features/slices/filterSlice';
import { getAllProducts } from '../Features/slices/productslice';
const Filter = () => {
  const dispatch = useDispatch();
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showBrand, setShowBrands] = useState(false);
  const [showRatings, setShowRatings] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showAvailabilitty, setShowAvailabilitty] = useState(false);

  /*   const sortByRating = (rate) => {
    //console.log(rate);
    dispatch(filterByRating(rate));
  }; */
  const { price, byColor, byStock, byRating, searchQuery, byBrand } =
    useSelector((state) => ({ ...state.filter }));

  return (
    <div className="flex-1 w-full ">
      <h3 className="font-bold text-sm md:text-2xl uppercase mb-11">
        Filter products
      </h3>
      <div>
        <div className="flex items-center justify-between font-bold text-sm md:text-xl">
          <h5 className="mr-24">Price</h5>

          {showPriceRange ? (
            <BsChevronCompactUp
              size={30}
              className="cursor-pointer text-[#d1b112] "
              onClick={() => setShowPriceRange(!showPriceRange)}
            />
          ) : (
            <BsChevronCompactDown
              size={30}
              className="cursor-pointer text-[#d1b112]"
              onClick={() => setShowPriceRange(!showPriceRange)}
            />
          )}
        </div>
        {showPriceRange && (
          <>
            <div className="flex gap-4">
              <input
                type="radio"
                name="ascending"
                value="asc"
                onChange={() => dispatch(sortByPrice('lowToHigh'))}
                checked={price === 'lowToHigh' && true}
              />
              <p>Lowest To Highets Price</p>
            </div>
            <div className="flex gap-4">
              <input
                type="radio"
                name="ascending"
                value="desc"
                onChange={() => dispatch(sortByPrice('highToLow'))}
                checked={price === 'highToLow' && true}
              />
              <p>Highest To Lowest Price</p>
            </div>
          </>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between font-bold text-sm md:text-xl ">
          <h5 className="mr-24">Ratings</h5>

          {showRatings ? (
            <BsChevronCompactUp
              size={30}
              className="cursor-pointer text-[#d1b112] "
              onClick={() => setShowRatings(!showRatings)}
            />
          ) : (
            <BsChevronCompactDown
              size={30}
              className="cursor-pointer text-[#d1b112]"
              onClick={() => setShowRatings(!showRatings)}
            />
          )}
        </div>
        {showRatings && (
          <>
            {[1, 2, 3, 4, 5].map((num, index) => (
              <div className="flex gap-4" key={index}>
                <input
                  type="checkbox"
                  name="ascending"
                  onChange={() => dispatch(sortByRatings(num))}
                  //onClick={() => sortByRating(num)}
                />
                <p>{num} Stars</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between font-bold text-sm md:text-xl">
          <h5 className="mr-24">Brands</h5>

          {showBrand ? (
            <BsChevronCompactUp
              size={30}
              className="cursor-pointer text-[#d1b112] "
              onClick={() => setShowBrands(!showBrand)}
            />
          ) : (
            <BsChevronCompactDown
              size={30}
              className="cursor-pointer text-[#d1b112]"
              onClick={() => setShowBrands(!showBrand)}
            />
          )}
        </div>
        {showBrand && (
          <>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByBrand('seater'))}
              />
              <p>Seaters</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByBrand('tables'))}
              />
              <p>Tables</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByBrand('storage'))}
              />
              <p>Storage</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByBrand('outdoor'))}
              />
              <p>Outdoor</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByBrand('dinning'))}
              />
              <p>Dinning</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByBrand('dinning'))}
              />
              <p>Dinning</p>
            </div>
          </>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between font-bold text-sm md:text-xl">
          <h5 className="mr-24">Color</h5>

          {showColor ? (
            <BsChevronCompactUp
              size={30}
              className="cursor-pointer  text-[#d1b112] "
              onClick={() => setShowColor(!showColor)}
            />
          ) : (
            <BsChevronCompactDown
              size={30}
              className="cursor-pointer text-[#d1b112]"
              onClick={() => setShowColor(!showColor)}
            />
          )}
        </div>
        {showColor && (
          <>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByColor('brown'))}
              />
              <p>Brown</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByColor('white'))}
              />
              <p>White</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByColor('black'))}
              />
              <p>Black</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByColor('blue'))}
              />
              <p>Blue</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByColor('gray'))}
              />
              <p>Grey</p>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => dispatch(sortByColor('red'))}
              />
              <p>Red</p>
            </div>
          </>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between font-bold text-sm md:text-xl">
          <h5 className="mr-24">Availability</h5>

          {showAvailabilitty ? (
            <BsChevronCompactUp
              size={30}
              className="cursor-pointer text-[#d1b112] "
              onClick={() => setShowAvailabilitty(!showAvailabilitty)}
            />
          ) : (
            <BsChevronCompactDown
              size={30}
              className="cursor-pointer text-[#d1b112]"
              onClick={() => setShowAvailabilitty(!showAvailabilitty)}
            />
          )}
        </div>
        {showAvailabilitty && (
          <>
            <div className="flex gap-4">
              <input
                type="radio"
                onChange={() => dispatch(sortByStock(false))}
              />
              <p>Include out Of Stock</p>
            </div>
            <div className="flex gap-4">
              <input
                type="radio"
                onChange={() => dispatch(sortByStock(true))}
              />
              <p>In Stock only</p>
            </div>
          </>
        )}
      </div>
      <button
        className=" border-4 mt-6 mb-7 sm:mb-0   w-full font-bold text px-3 border-[#d1b112] sm:text-[rgb(218,221,227)] shadow-md hover:shadow-2xl transition duration-300 active:scale-105"
        onClick={() => {
          dispatch(clearFilter());
          dispatch(getAllProducts());
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;

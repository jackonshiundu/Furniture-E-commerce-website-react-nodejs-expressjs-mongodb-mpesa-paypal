import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  addToCart,
  removeFromCart,
  removeQuantity,
} from '../Features/slices/cartSlice';
import {
  addToWishList,
  removeFromWishList,
} from '../Features/slices/wishListSlice';

const SingleProduct = () => {
  const dispatch = useDispatch();
  let [numberofItems, setNumberofItems] = useState(1);
  const { wishlistItem } = useSelector((state) => ({ ...state.wishList }));

  const { singleProduct } = useSelector((store) => ({ ...store.product }));
  const { cartItems } = useSelector((store) => ({ ...store.cart }));
  const [addWishList, SetAddWishList] = useState(false);

  const increment = () => {
    setNumberofItems(() =>
      numberofItems == singleProduct.countInStock
        ? singleProduct.countInStock
        : numberofItems++
    );
  };
  const decrement = () => {
    setNumberofItems(() => (numberofItems == 0 ? 0 : numberofItems--));
  };
  const getQuantity = () => {
    let quantity = 0;
    if (cartItems) {
      cartItems.map((item) => {
        if (item._id == singleProduct._id) {
          quantity = item.quantity;
        }
      });
    }
    return quantity;
  };
  let quantity = getQuantity();
  console.log(quantity);
  useEffect(() => {
    wishlistItem.map((item) => {
      if (item._id === singleProduct._id) {
        SetAddWishList(!addWishList);
      }
    });
  }, []);
  return (
    <div className="bg-[#dadde3] pb-20   h-full">
      <Link to="/buyfurnitures">
        <button className='bg-[#d1b112] ml-12 mt-14 px-3 cursor-pointer no-wrap font-bold text-[#dadde3] py-2 active:scale-105 w-fit transition-all duration-300"'>
          Shop More
        </button>
      </Link>
      <div className="relative h-screen bg-white ring-[#1e3639] flex flex-col md:flex-row p-4 md:p-0  w-screen md:w-3/4 mx-auto mt-14 ring-1 shadow-lg mb-4">
        <div className="flex-1">
          <div>
            <img src={`${singleProduct?.images}`} alt={singleProduct?.name} />
          </div>
        </div>
        <div className={`absolute top-0 right-0 text-2xl cursor-pointer  `}>
          {addWishList ? (
            <AiFillHeart
              color="#cb400d"
              cursor="pointer"
              className="active:scale-105 transition-all duration-500"
              onClick={() => {
                SetAddWishList(!addWishList);
                toast.success('removed from the wishlist sucessfully');

                dispatch(removeFromWishList(singleProduct._id));
              }}
            />
          ) : (
            <AiOutlineHeart
              color="#d1b112"
              className="active:scale-105 transition-all duration-500"
              onClick={() => {
                toast.success('added to wishlist sucessfully');
                SetAddWishList(!addWishList);
                dispatch(addToWishList(singleProduct));
              }}
            />
          )}
        </div>
        <div className="flex-1 flex flex-col justify-around p-5 ">
          <div className="flex justify-between items-center">
            <h2 className=" text-[#1e3639] text-4xl font-bold">
              {singleProduct?.name}
            </h2>
            <div className="flex items-center gap-5">
              <Rating value={singleProduct?.rating} readOnly />(
              {singleProduct?.numReviews})
            </div>
          </div>
          <p className="text-lg">{singleProduct?.description}</p>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl text-[#d1b112]">
              Ksh{singleProduct?.price}
            </h1>
            <h1 className="font-bold text-sml text-red-500">
              {((singleProduct?.price - singleProduct?.price) /
                singleProduct?.price) *
                100}
              % Off
            </h1>
            <h1 className="line-through font-bold text-2xl text-gray-500">
              Ksh.{singleProduct?.price}
            </h1>
          </div>
          <div className=" flex items-center justify-between">
            <div className="h-10 flex items-center gap-4">
              <AiOutlinePlus
                className="bg-gray-600 text-base text-white md:text-2xl active:scale-105 duration-300 font-bold md:font-extrabold rounded-full cursor-pointer"
                onClick={() => {
                  dispatch(addToCart(singleProduct));
                  increment();
                }}
              />

              <p className="border-2 border-[#1e3639] w-10 h-10 flex items-center justify-center">
                {quantity === undefined ? '0' : quantity}
              </p>
              <AiOutlineMinus
                className="bg-gray-600 text-white text-base md:text-2xl active:scale-105 duration-300 font-bold md:font-extrabold rounded-full cursor-pointer"
                onClick={() => {
                  if (quantity === 0) {
                    dispatch(removeFromCart(singleProduct._id));
                  }
                  dispatch(removeQuantity(singleProduct));
                  decrement();
                }}
              />
            </div>
            <div>
              <button
                className="bg-[#d1b112] px-3 no-wrap font-bold text-[#dadde3] py-2 active:scale-105 w-fit transition-all duration-300"
                onClick={() => {
                  dispatch(addToCart(singleProduct));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <h5
            className={`${
              singleProduct?.countInStock >= 10
                ? 'bg-green-400 text-white'
                : 'bg-red-400 text-white py-2'
            } text-center`}
          >
            Number in Stock {singleProduct?.countInStock}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

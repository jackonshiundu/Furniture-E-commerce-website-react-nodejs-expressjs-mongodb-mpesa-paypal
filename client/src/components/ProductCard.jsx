import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../Features/slices/productslice';
import { addToCart } from '../Features/slices/cartSlice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {
  addToWishList,
  removeFromWishList,
} from '../Features/slices/wishListSlice';
const ProductCard = ({ item }) => {
  const { wishlistItem } = useSelector((state) => ({ ...state.wishList }));
  const [addWishList, SetAddWishList] = useState(false);
  const dispatch = useDispatch();
  const exerpt = (str) => {
    if (str.length > 35) {
      str = str.substring(0, 35) + '...';
    }
    return str;
  };

  const id = item._id;
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success('Added to cart successfully');
  };
  useEffect(() => {
    wishlistItem.map((item) => {
      if (item._id === id) {
        SetAddWishList(!addWishList);
      }
    });
  }, []);
  return (
    <div className="  w-fit md:w-72   shadow-md hover:shadow-lg transition-all duration-500">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={item?.images[1]}
          alt={item?.name}
          className="hover:scale-150 object-cover transition-all duration-500"
        />
      </div>
      <div className="p-2 md:p-3">
        <div className="relative flex w-full justify-between items-center">
          <h4 className="font-bold scale obj  md:text-2xl  text-[#1e3639]">
            {item?.name}
          </h4>
          <div className={`absolute top-0 right-0 text-2xl cursor-pointer  `}>
            {addWishList ? (
              <AiFillHeart
                color="#cb400d"
                cursor="pointer"
                className="active:scale-105 transition-all duration-500"
                onClick={() => {
                  SetAddWishList(!addWishList);
                  toast.success('removed from the wishlist sucessfully');

                  dispatch(removeFromWishList(id));
                }}
              />
            ) : (
              <AiOutlineHeart
                color="#d1b112"
                className="active:scale-105 transition-all duration-500"
                onClick={() => {
                  toast.success('added to wishlist sucessfully');
                  SetAddWishList(!addWishList);
                  dispatch(addToWishList(item));
                }}
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-500 text-xs md:text-md capitalize">
            {exerpt(item?.description)}
          </p>
          <Link to={`/buyfurnitures/${item?._id}`}>
            <a
              className="text-[#1e3639]  w-fit font-bold"
              onClick={() => dispatch(getSingleProduct(id))}
            >
              More
            </a>
          </Link>
        </div>
        <div className="flex justify-between items-center  gap-3 text-sm md:text-xl font-semibold md:font-bold">
          <h1>Ksh.{item?.price}</h1>
          <h1 className="text-[10px]  text-red-500">
            {((item?.price - item?.price) / item?.price) * 100}% Off
          </h1>
          <h1 className="line-through text-sm text-gray-400">
            Ksh.{item?.price}
          </h1>
        </div>
        <div className="h-10 mt-4 flex text-[10px] justify-between items-center">
          <Rating value={item?.rating} readOnly size="16px" />(
          {item?.numReviews})
          <button
            className="bg-[#d1b112] px-3 no-wrap font-bold text-[#dadde3] py-2 active:scale-105 w-fit transition-all duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

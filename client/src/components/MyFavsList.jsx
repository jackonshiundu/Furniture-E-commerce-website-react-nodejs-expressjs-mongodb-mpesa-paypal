import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import { removeFromWishList } from '../Features/slices/wishListSlice';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { addToCart } from '../Features/slices/cartSlice';

const MyFavsList = () => {
  const dispatch = useDispatch();
  const { wishlistItem } = useSelector((state) => ({ ...state.wishList }));

  return (
    <div className=" pl-7 pt-8 md:pl-14  md:pt-14 w-full pr-4">
      <h1 className="font-bold text-2xl ">My Wishlist</h1>
      <p className="font-bold mt-5 mb-5 tracking-widest">Items</p>
      <div className="w-full h-[0.5px] mb-6 bg-gray-400"></div>
      <div>
        {wishlistItem.length === 0 && (
          <p className="tracking-widest font-bold animate-bounce mb-11">
            Empty
          </p>
        )}
        {wishlistItem.map((item, index) => (
          <div className="shadow-md mb-5 p-5">
            {item?.images.map((image, index) => (
              <div key={index} className="h-fit w-full">
                <img src={image} alt={item.name} />
              </div>
            ))}
            <div className="flex gap-4 mb-3">
              <h4 className="font-bold text-[#d1b112] w-32">Name:</h4>
              <span className="tracking-widest">{item?.name}</span>
            </div>
            <div className="flex gap-4 mb-3">
              <h4 className="font-bold text-[#d1b112] w-32">Category:</h4>
              <span className="tracking-widest">{item?.category}</span>
            </div>
            <div className="flex gap-4 mb-3">
              <h4 className="font-bold text-[#d1b112] w-32">Price:</h4>
              <span className="tracking-widest">{item?.price}</span>
            </div>
            <div className="flex gap-4 mb-3">
              <h4 className="font-bold text-[#d1b112] w-32">Count In Stock:</h4>
              <span
                className={`tracking-widest font-bold  ${
                  item?.countInStock < 10 ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {item?.countInStock}
              </span>
            </div>
            <div className="flex gap-4 mb-3">
              <h4 className="font-bold text-[#d1b112] w-32">Reviews:</h4>
              <Rating value={item?.rating} readOnly size="16px" />(
              {item?.numReviews})
            </div>
            <div className="flex gap-24 items-center">
              <span
                className="cursor-pointer w-[10%] ml-5 hover:text-[#cb400d] "
                onClick={() => {
                  const yes = window.confirm(
                    'Are you sure you want to delete from wishlist?'
                  );
                  if (yes) {
                    dispatch(removeFromWishList(item._id));
                    toast.success('removed from the wishlist sucessfully');
                  }
                }}
              >
                <AiFillDelete />
              </span>
              <button
                className="bg-[#d1b112] px-3 no-wrap font-bold text-[#dadde3] py-2 active:scale-105 w-fit transition-all duration-300"
                onClick={() => {
                  dispatch(addToCart(item));
                  dispatch(removeFromWishList(item._id));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavsList;

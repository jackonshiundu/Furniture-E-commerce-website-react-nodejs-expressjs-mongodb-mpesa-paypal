import React from 'react';
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  removeFromCart,
  removeQuantity,
} from '../Features/slices/cartSlice';
import { getSingleProduct } from '../Features/slices/productslice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => ({ ...state.cart }));

  return (
    <div className="h-screen mt-11 ">
      <div className="flex justify-between w-[90%] sm:w-3/4 mb-11 mx-auto">
        <Link to="/buyfurnitures">
          <button className='bg-[#d1b112] px-3 cursor-pointer no-wrap font-bold text-[#dadde3] py-2 active:scale-105 w-fit transition-all duration-300"'>
            Back
          </button>
        </Link>
        {cartItems.length === 0 ? (
          <div></div>
        ) : (
          <Link to="/shippingscreen">
            <button
              disabled={cartItems.length === 0}
              className='bg-[#d1b112] px-3 cursor-pointer no-wrap font-bold text-[#dadde3] py-2 active:scale-105 w-fit transition-all duration-300"'
            >
              proceed To Checkout
            </button>
          </Link>
        )}
      </div>
      <div className="p-0 shadow-lg w-screen md:w-3/4 mx-auto md:p-4">
        {cartItems.length === 0 && (
          <span className="mx-auto font-extrabold text-[#d1b112]">Empty</span>
        )}
        {cartItems.map((cartItem, index) => {
          const productId = cartItem?._id;
          return (
            <div
              key={index}
              className="flex items-center shadow-md justify-around md:justify-between mb-5 md:px-5 text-start  bottom-1 w-screen md:w-full h-14 md:h-24 bg-[#dadde3]"
            >
              <div className=" h-12 w-12 md:h-24 md:w-24 bg-white rounded-full">
                <img src={cartItem?.image} alt={cartItem?.item?.name} />
              </div>
              <Link
                to={`/buyfurnitures/${cartItem._id}`}
                onClick={() => dispatch(getSingleProduct(cartItem._id))}
              >
                <h1 className=" w-40 md:w-64 text-base text-center md:text-xl font-extrabold">
                  {cartItem?.name}
                </h1>
              </Link>

              <div className="flex w-16 gap-3 md:gap-6 items-center">
                <h1 className="text-sm md:text-xl font-extrabold">
                  {cartItem?.quantity}
                </h1>
                <div className="flex flex-col gap-3 md:gap-4">
                  <AiOutlinePlus
                    className="bg-gray-600 text-base text-white md:text-2xl active:scale-105 duration-300 font-bold md:font-extrabold rounded-full cursor-pointer"
                    onClick={() => dispatch(addToCart(cartItem))}
                  />
                  <AiOutlineMinus
                    className="bg-gray-600 text-white text-base md:text-2xl active:scale-105 duration-300 font-bold md:font-extrabold rounded-full cursor-pointer"
                    onClick={() => {
                      if (cartItem.quantity === 0) {
                        dispatch(removeFromCart(cartItem._id));
                      }
                      dispatch(removeQuantity(cartItem));
                    }}
                  />
                </div>
              </div>
              <h1 className="text-[12px] md:text-xl font-extrabold">
                Ksh.{(cartItem?.price * cartItem?.quantity).toFixed(2)}
              </h1>
              <div
                onClick={() => {
                  if (window.confirm()) {
                    dispatch(removeFromCart(productId));
                  }
                }}
              >
                <AiFillDelete className="cursor-pointer" />
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-between md:justify-around font-bold ">
          <h2>Total</h2>
          <h2 className="mr-11 md:mr-0">
            Ksh.{' '}
            {cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

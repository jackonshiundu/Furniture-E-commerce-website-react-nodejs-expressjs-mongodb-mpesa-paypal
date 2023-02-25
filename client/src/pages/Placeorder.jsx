import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutWizard from '../components/CheckoutWizard';
import Paypalcomponents from '../components/paypalcomponents';
import {
  addToCart,
  removeFromCart,
  removeQuantity,
} from '../Features/slices/cartSlice';
import { getSingleProduct } from '../Features/slices/productslice';

const Placeorder = () => {
  const dispatch = useDispatch();
  const { shippingInfo, paymentMethod } = useSelector((state) => ({
    ...state.shipping,
  }));
  const { cartItems } = useSelector((state) => ({
    ...state.cart,
  }));
  console.log(cartItems);
  const { address, city, country, county, phone, postalCode } = shippingInfo;
  return (
    <div className=" pb-24 bg-[#dadde3]  ">
      <CheckoutWizard activeStep="3" />
      <h1 className="font-bold uppercase tracking-wider mb-4 mt-6 ml-11 ">
        Make <span className="text-[#d1b112]">Payments </span>to place Your
        Order
      </h1>
      <div className="flex flex-col w-full px-4 md:px-0 gap-6 mx-auto lg:w-3/4    md:flex-row">
        <div className="flex-2 w-full md:w-[60%]">
          <div className="bg-white    mb-4 p-5 shadow-lg ring-1 ring-[#1e3639]">
            <h1 className="font-bold">Shipping Address</h1>
            <p>{`${country}, ${county}, ${address}, ${postalCode}`}</p>
            <Link to="/shippingscreen">
              <a className="text-blue-500 underline">Edit</a>
            </Link>
          </div>
          <div className="bg-white mb-4 p-5 shadow-lg ring-1 ring-[#1e3639]">
            <h1 className="font-bold">Payment Method</h1>
            <p>{paymentMethod}</p>
            <Link to="/payment">
              <a className="text-blue-500 underline">Edit</a>
            </Link>
          </div>
          <div className="bg-white mb-4 p-5 w-full shadow-lg ring-1 ring-[#1e3639]">
            <h1 className="font-bold">Order Items</h1>
            <table className="mim-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="px-3 lg:px-7 text-[12px] lg:text-md text-left ">
                    Item
                  </th>
                  <th className="px-1 lg:px-7 text-[12px] text-right">
                    Quantity
                  </th>
                  <th className="px-1 lg:px-7 text-[12px] text-right">Price</th>
                  <th className="px-1 lg:px-7 text-[12px] text-right">
                    Subtotal
                  </th>
                  <th className="px-1 lg:px-7 text-[12px] text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="border-b">
                    <td className=" border-r">
                      <Link
                        to={`/buyfurnitures/${item._id}`}
                        onClick={() => dispatch(getSingleProduct(item._id))}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 overflow-hidden lg:w-24 lg:h-24 rounded-full bg-gray-300 ">
                            <img
                              className="object-cover w-full h-full"
                              src={item?.images[0]}
                              alt="pic"
                            />
                          </div>
                          {item?.name}
                        </div>
                      </Link>
                    </td>
                    <td className=" border-r">{item?.quantity}</td>
                    <td className="ml-4 border-r">{item?.price}</td>
                    <td className=" border-r">
                      {(item?.quantity * item?.price).toFixed(2)}
                    </td>

                    <td className="flex flex-col justify-center mt-5 h-full w-full items-center gap-3 md:gap-4">
                      <AiOutlinePlus
                        className="bg-gray-600 text-base text-white md:text-2xl active:scale-105 duration-300 font-bold md:font-extrabold rounded-full cursor-pointer"
                        onClick={() => dispatch(addToCart(item))}
                      />
                      <AiOutlineMinus
                        className="bg-gray-600 text-white text-base md:text-2xl active:scale-105 duration-300 font-bold md:font-extrabold rounded-full cursor-pointer"
                        onClick={() => {
                          if (item.quantity === 0) {
                            dispatch(removeFromCart(item._id));
                          }
                          dispatch(removeQuantity(item));
                        }}
                      />
                    </td>
                  </tr>
                ))}
                <tr className="border-b">
                  <td colSpan={3} className="border-r font-bold">
                    {' '}
                    Total
                  </td>
                  <td className="border-r text-[12px] font-bold">
                    Ksh.
                    {Math.ceil(
                      cartItems.reduce(
                        (a, item) => a + item.quantity * item.price,
                        0
                      )
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1 bg-white md:w-[40%] h-fit  shadow-md ring-1 ring-[#1e3639]">
          <Paypalcomponents />
        </div>
      </div>
    </div>
  );
};

export default Placeorder;

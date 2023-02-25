import React, { useState } from 'react';
import {
  IoIosHeart,
  IoIosLocate,
  IoIosLogOut,
  IoIosSettings,
  IoMdArrowDropright,
  IoMdBasket,
  IoMdContact,
  IoMdLogOut,
  IoMdPin,
} from 'react-icons/io';
import { useDispatch } from 'react-redux';
import AccountSettings from '../components/AccountSettings';
import MyAdressPage from '../components/MyAdressPage';
import MydetailsPage from '../components/MydetailsPage';
import MyFavsList from '../components/MyFavsList';
import { logoutUser } from '../Features/slices/AuthSlice';
import MyOrdersPage from '../components/MyOrdersPage';

const Personaldetails = () => {
  const dispatch = useDispatch();
  const [showAcive, setShowActive] = useState('ShowDetails');

  const activePage = (page) => {
    setShowActive(page);
  };
  return (
    <div className="flex flex-col mx-auto bg-[#dadde3] h-fit pb-16">
      <div className=" md:w-3/4 md:mx-auto mt-7">
        <h1 className="font-bold text-2xl text-[#1e3639]">My account</h1>
        <div className="mt-11 flex gap-3">
          <div className="flex flex-col gap-4  mb-24">
            <h4
              className={`flex  md:gap-4 items-center ${
                showAcive === 'ShowDetails'
                  ? 'text-white shadow-md bg-[#8fb6bb] justify-between '
                  : 'text-black'
              } cursor-pointer text-[10px] md:text-lg p-2   w-28 gap-2 md:w-52 md:font-bold active:scale-105 transition-all duration-300`}
              onClick={() => activePage('ShowDetails')}
            >
              <IoMdContact /> My Details
              {showAcive === 'ShowDetails' && (
                <IoMdArrowDropright className="mr-4 text-xl" />
              )}
            </h4>
            <h4
              className={`flex ${
                showAcive === 'showFavourites'
                  ? 'text-white shadow-md bg-[#8fb6bb] justify-between'
                  : 'text-black'
              } gap-4 items-center cursor-pointer p-2 text-[10px] md:text-lg   w-28 gap-2 md:w-52 md:font-bold active:scale-105 transition-all duration-300`}
              onClick={() => activePage('showFavourites')}
            >
              <IoIosHeart /> Favourites
              {showAcive === 'showFavourites' && (
                <IoMdArrowDropright className="mr-4 text-xl" />
              )}
            </h4>
            <h4
              className={`flex ${
                showAcive === 'showOrders'
                  ? 'text-white shadow-md bg-[#8fb6bb] justify-between '
                  : 'text-black'
              } gap-4 items-center cursor-pointer p-2 text-[10px] md:text-lg   w-28 gap-2 md:w-52 md:font-bold active:scale-105 transition-all duration-300`}
              onClick={() => activePage('showOrders')}
            >
              <IoMdBasket /> Orders
              {showAcive === 'showOrders' && (
                <IoMdArrowDropright className="mr-4 text-xl" />
              )}
            </h4>
            <h4
              className={`flex ${
                showAcive === 'showAdress'
                  ? 'text-white shadow-md bg-[#8fb6bb] justify-between'
                  : 'text-black'
              } gap-4 items-center cursor-pointer p-2 text-[10px] md:text-lg   w-28 gap-2 md:w-52 md:font-bold active:scale-105 transition-all duration-300`}
              onClick={() => activePage('showAdress')}
            >
              <IoMdPin /> Address
              {showAcive === 'showAdress' && (
                <IoMdArrowDropright className="mr-4 text-xl" />
              )}
            </h4>
            <h4
              className={`flex ${
                showAcive === 'showAccount'
                  ? 'text-white shadow-md bg-[#8fb6bb] justify-between'
                  : 'text-black'
              } gap-4 items-center cursor-pointer p-2 text-[10px] md:text-lg   w-28 gap-2 md:w-52 md:font-bold active:scale-105 transition-all duration-300`}
              onClick={() => activePage('showAccount')}
            >
              <IoIosSettings /> Settings
              {showAcive === 'showAccount' && (
                <IoMdArrowDropright className="mr-4 text-xl" />
              )}
            </h4>
            <h4
              className="flex active:bg-[#8fb6bb] gap-4 items-center cursor-pointer p-2 text-[10px] md:text-lg   w-28 gap-2 md:w-52 md:font-bold active:scale-105 transition-all duration-300"
              onClick={() => dispatch(logoutUser())}
            >
              <IoIosLogOut /> Sign Out
            </h4>
          </div>
          <div className="w-full h-fit bg-white shadow-md">
            {showAcive === 'ShowDetails' && <MydetailsPage />}
            {showAcive === 'showAdress' && <MyAdressPage />}
            {showAcive === 'showOrders' && <MyOrdersPage />}
            {showAcive === 'showFavourites' && <MyFavsList />}
            {showAcive === 'showAccount' && <AccountSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaldetails;

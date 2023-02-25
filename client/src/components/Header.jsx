import React, { useEffect, useState } from 'react';
import { IoIosClose, IoMdBasket, IoMdContact } from 'react-icons/io';
import {
  AiFillDelete,
  AiOutlineHeart,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from 'react-icons/ai';
import { closeMenu, openMenu } from '../Features/slices/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../Features/slices/AuthSlice';
import { removeFromWishList } from '../Features/slices/wishListSlice';
import { toast } from 'react-toastify';
import { motion as m } from 'framer-motion';
const Header = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => ({ ...state.menu }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { cartItems } = useSelector((state) => ({ ...state.cart }));
  const { wishlistItem } = useSelector((state) => ({ ...state.wishList }));

  const [openWishList, setOpenWishList] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const handleCloseLogout = () => {
    dispatch(closeMenu());
    dispatch(logoutUser());
    ModalOpened();
  };

  const firstName = user?.result?.name.split(' ')[0];
  const secondName = user?.result?.name.split(' ')[1];
  useEffect(() => {}, []);

  const handleMenu = () => setOpenUserMenu(!openUserMenu);

  const ModalOpened = () => {
    if (openUserMenu || openWishList || wishlistItem) {
      setOpenModel(!openModel);
    }
  };
  const changeNavBar = () => {
    if (window.scrollY > 100) {
      setHideOnScroll(true);
    } else {
      setHideOnScroll(false);
    }
  };

  window.addEventListener('scroll', changeNavBar);
  /*   useEffect(() => {
    ModalOpened();
  }, [openUserMenu, openWishList, wishlistItem]); */
  return (
    <>
      {hideOnScroll && (
        <m.div
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="h-34 w-screen    bg-[#1e3639] text-[#dadde3] flex justify-between items-center px-5  md:px-[10rem] "
        >
          <h5 className="text-center text-sm sm:text-xl">
            Buy Furniture worth Ksh.20000 and jet{' '}
            <span className="text-[#d1b112]">20%</span> off
          </h5>
          <h4 className="text-right font-bold text-xl">Blog</h4>
        </m.div>
      )}
      {openModel && (
        <div
          className={` ${
            hideOnScroll ? 'fixed top-0 w-screen bg-white ' : 'absolute'
          } z-20  top-0 left-0 z-20 w-screen h-screen bg-[#11101057] `}
        ></div>
      )}
      <div
        className={`mx-auto  py-5 z-10   ${
          hideOnScroll ? 'fixed top-0 w-screen bg-white ' : 'relative'
        } shadow-lg  my-auto  px-5 sm:px-0  md:px-16`}
      >
        <div className="flex justify-between h-11 items-center">
          <Link to="/">
            <div className="flex  text-3xl sm:text-6xl font-bold cursor-pointer">
              <h2>Fur.</h2>
              <h2 className="text-[#d1b112]">Niture</h2>
            </div>
          </Link>
          <div className="flex gap-5 text-4xl text-[#d1b112] items-center">
            <div
              className="relative   w-fit h-fit "
              onClick={() => {
                ModalOpened();
                setOpenWishList(!openWishList);
              }}
            >
              <AiOutlineHeart />
              <div className="number-of-counts">
                <span>{wishlistItem.length}</span>
              </div>
            </div>
            <Link to="/cart">
              <div className="relative cursor-pointer text-4xl  w-fit h-fit">
                <IoMdBasket />
                <div className="number-of-counts">
                  <span>{cartItems.length}</span>
                </div>
              </div>
            </Link>
            <div
              onClick={() => {
                ModalOpened();
                handleMenu();
              }}
              className=" cursor-pointer w-8 h-8 text-sm rounded-full flex items-center justify-center  text-white bg-[#d1b112]"
            >
              {user ? (
                user?.result?.name.split(' ')[0].substring(0, 2).toUpperCase()
              ) : (
                <IoMdContact />
              )}
            </div>
            {/*              (
            <div className="cursor-pointer active:scale-105 duration-300">
              <AiOutlineMenuUnfold
                onClick={() => {
                  dispatch(closeMenu());
                }}
              />
            </div>
            ) :  */}
            <div className="cursor-pointer active:scale-105 duration-300">
              <AiOutlineMenuFold
                onClick={() => {
                  ModalOpened();
                  dispatch(openMenu());
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {openWishList && (
        <div className="fixed top-24 z-40  text-[#dadde3] bg-[#1e3639]   right-28 w-72 md:right-36  lg:right-56 shadow-lg p-5">
          <h1 className="font-bold text-2xl tracking-widest">Wishlist</h1>
          <div
            className="absolute top-2 right-1 cursor-pointer font-bold text-2xl active:scale-105 transition-all duration-300"
            onClick={() => {
              ModalOpened();
              setOpenWishList(!openWishList);
            }}
          >
            <IoIosClose className="active:scale-105 hover:text-[#d1b112] transition-all duration-300" />
          </div>
          {wishlistItem.length === 0 && <span>Empty</span>}
          {wishlistItem.map((item) => (
            <div className="flex w-full justify-between gap-8  items-center border-b-2 border-[#d1b112]">
              <p className="w-[60%]">{item.name}</p>
              <p className="w-[20%] font-bold">Ksh.{item.price}</p>
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
            </div>
          ))}
        </div>
      )}
      {openUserMenu && (
        <div
          className={`absolute right-11  md:right-24 shadow-lg p-5 backdrop-blur-md w-32 z-40`}
        >
          <div
            className="absolute top-2 right-1 cursor-pointer text-white font-bold text-2xl active:scale-105 transition-all duration-300"
            onClick={() => {
              ModalOpened();
              handleMenu();
            }}
          >
            <IoIosClose className="active:scale-105 hover:text-[#d1b112] transition-all duration-300" />
          </div>
          {user ? (
            <div className="text-[#d1b112] font-bold cursor-pointer ">
              <h1
                className="active:scale-105 hover:scale-110 transition-all duration-300 mt-4"
                onClick={() => {
                  handleMenu();
                  ModalOpened();

                  dispatch(logoutUser());
                }}
              >
                Log Out
              </h1>
              <Link
                to="/rersonaldetails"
                onClick={() => {
                  ModalOpened();
                  handleMenu();
                }}
              >
                <h1 className="active:scale-105 hover:scale-110 transition-all duration-300">
                  Account
                </h1>
              </Link>
            </div>
          ) : (
            <div className="text-[#d1b112] font-bold cursor-pointer">
              <Link
                to="/login"
                onClick={() => {
                  ModalOpened();
                  handleMenu();
                }}
              >
                <h1 className="active:scale-105 hover:scale-110 transition-all duration-300 mt-4">
                  log In
                </h1>
              </Link>
            </div>
          )}
        </div>
      )}

      {open && (
        <m.div
          initial={{ x: '-100% ' }}
          animate={{ x: '0%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`${
            hideOnScroll ? 'fixed top-0 ' : 'absolute'
          } z-50 top-0 transition-all transform duration-300 bg-[#1e3639] w-3/4 md:w-1/2 h-screen flex items-center flex-col cursor-pointer`}
        >
          <div
            className="absolute top-2 right-1 cursor-pointer text-white font-bolder text-4xl active:scale-105 transition-all duration-300"
            onClick={() => {
              ModalOpened();
              dispatch(closeMenu());
            }}
          >
            <IoIosClose className="active:scale-105 hover:text-[#d1b112] transition-all duration-300" />
          </div>
          <div className="flex mt-20 l-14 text-5xl sm:text-6xl font-bold">
            <h2>Fur.</h2>
            <h2 className="text-[#d1b112]">Niture</h2>
          </div>
          <div className="text-2xl mt-28 font-bold cursor-pointer">
            <ul className="flex flex-col gap-3">
              <Link to="/">
                <li
                  className="menuitems tracking-widest uppercase"
                  onClick={() => {
                    ModalOpened();
                    dispatch(closeMenu());
                  }}
                >
                  Home
                </li>
              </Link>
              <Link to="buyfurnitures">
                <li
                  className="menuitems tracking-widest uppercase"
                  onClick={() => {
                    ModalOpened();
                    dispatch(closeMenu());
                  }}
                >
                  Shop
                </li>
              </Link>
              <li
                className="menuitems tracking-widest uppercase"
                onClick={() => {
                  ModalOpened();
                  dispatch(closeMenu());
                }}
              >
                Featured
              </li>
              <li
                className="menuitems tracking-widest uppercase"
                onClick={() => {
                  ModalOpened();
                  dispatch(closeMenu());
                }}
              >
                About
              </li>
              <Link to="/contactus">
                <li
                  className="menuitems tracking-widest uppercase"
                  onClick={() => {
                    ModalOpened();
                    dispatch(closeMenu());
                  }}
                >
                  Contact
                </li>
              </Link>
              <Link to="/rersonaldetails">
                <li
                  className="menuitems tracking-widest uppercase"
                  onClick={() => {
                    ModalOpened();
                    dispatch(closeMenu());
                  }}
                >
                  Account
                </li>
              </Link>
              <Link to="/login">
                <li
                  className="menuitems tracking-widest uppercase"
                  onClick={handleCloseLogout}
                >
                  {user ? 'Logout' : 'Login'}
                </li>
              </Link>
            </ul>
          </div>
          {user && (
            <div className="text-5xl mt-16 mb-11 text-3xl capitalize font-bold cursor-pointer tracking-widest capitalize">
              <h2 className="text-[#d1b112]">
                {firstName}
                <span className="text-black ml-4">{secondName}</span>
              </h2>
            </div>
          )}
        </m.div>
      )}
    </>
  );
};

export default Header;

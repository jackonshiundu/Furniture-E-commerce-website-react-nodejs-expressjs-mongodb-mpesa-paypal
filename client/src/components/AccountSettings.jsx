import React, { useEffect, useState } from 'react';
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineEdit,
  AiTwotoneEdit,
} from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { Puff } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInput from 'react-phone-number-input';
import {
  deleteUser,
  logoutUser,
  UpdateUser,
} from '../Features/slices/AuthSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { clearWishlist } from '../Features/slices/wishListSlice';

const AccountSettings = () => {
  const { user, loading, error } = useSelector((state) => ({ ...state.auth }));
  const {
    shippingInfo: { phone },
  } = useSelector((state) => ({ ...state.shipping }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email } = user.result;
  console.log(user);
  const id = user.result._id;
  const UserInfo = {
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1],
    email: email,
    phone: phone,
    password: '',
    city: '',
    county: '',
  };
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState(UserInfo);
  const [phoneNumber, setPhoneNumber] = useState(phone);

  const { firstName, lastName } = formData;
  const handleOpenEditForm = () => {
    setOpenForm(!openForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dispatch(UpdateUser({ id, formData, toast })));
    handleOpenEditForm();
  };
  const handleInputCHange = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value, phoneNumber: phoneNumber });
  };
  useEffect(() => {
    toast.error(error);
  }, [error]);
  return (
    <div
      className={`pl-7 pt-8 md:pl-14 h-${
        openForm ? 'fit' : 'screen'
      } pb-11  md:pt-14 w-full pr-4`}
    >
      <h1 className="font-bold text-2xl ">Account Settings</h1>
      <p className="font-bold mt-5 mb-5 tracking-widest">Settings</p>
      <div className="w-full h-[0.5px] mb-6 bg-gray-400"></div>
      <div>
        <h4 className=" py-1 px-6 tracking-widest">
          Edit or Delete Your Account Details
        </h4>
        <div className=" flex justify-between text-4xl mt-5  0 cursor-pointer ">
          <div>
            <p className="text-sm tracking-widest">Edit Account</p>
            {openForm ? (
              <IoMdClose
                onClick={handleOpenEditForm}
                className="hover:text-[#d1b112] mb-4 active:scale-105 transform duration-300"
              />
            ) : (
              <AiTwotoneEdit
                className="active:scale-105 mb-4 hover:text-[#d1b112]  transition-all duration-50"
                onClick={handleOpenEditForm}
              />
            )}
          </div>
          <div className="flex flex-col items-center tracking-widest">
            <p className="text-sm">Delete Account</p>
            <AiOutlineDelete
              className="hover:text-red-500  active:scale-105 transform duration-300"
              onClick={() => {
                if (window.confirm('Are You sure you want to delete')) {
                  dispatch(deleteUser({ id, navigate, toast }));
                  dispatch(clearWishlist());
                }
              }}
            />
          </div>
        </div>
        {openForm && (
          <form
            action=""
            className={`flex flex-col gap-5 ${
              openForm ? 'w-full' : 'w-0'
            } transition-all duration-500 transform`}
            onSubmit={handleSubmit}
          >
            <div className="flex  gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
              <label
                htmlFor="email"
                className="flex-1 h-full text-sm text-bottom"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputCHange}
                className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
                placeholder="email@gmail.com"
              />
            </div>
            <div className="flex  gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
              <label
                htmlFor="firstName"
                className="flex-1 h-full text-sm text-bottom"
              >
                Firstname
              </label>
              <input
                type="name"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={handleInputCHange}
                className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              />
            </div>
            <div className="flex  gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
              <label
                htmlFor="lastName"
                className="flex-1 h-full text-sm text-bottom"
              >
                Lastname
              </label>
              <input
                type="name"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={handleInputCHange}
                className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              />
            </div>
            <div className="flex  gap-4 md:gap-11 justify-between w-full mb-4 text-xl items-center font-semibold">
              <label
                htmlFor="phoneNumber"
                className="flex-1 h-full text-sm text-bottom"
              >
                Phone Number
              </label>
              <PhoneInput
                id="phoneNumber"
                value={phoneNumber}
                onChange={setPhoneNumber}
                className="flex-3 flex w-3/4  outline-0   mb-4  outline-0"
              />
            </div>
            <div className="flex gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
              <label
                htmlFor="password"
                className="flex-1 h-full text-sm text-bottom"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputCHange}
                className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              />
            </div>
            <div className="flex gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
              <label
                htmlFor="city"
                className="flex-1 h-full text-sm text-bottom"
              >
                City
              </label>
              <input
                type="name"
                name="city"
                id="city"
                onChange={handleInputCHange}
                className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              />
            </div>
            <div className="flex gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
              <label
                htmlFor="county"
                className="flex-1 h-full text-sm text-bottom"
              >
                County
              </label>
              <input
                type="name"
                name="county"
                id="county"
                onChange={handleInputCHange}
                className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 text-white mt-6 flex items-center justify-center font-bold py-2 active:scale-105 mx-auto bg-[#1e3639]"
            >
              {loading ? (
                <div className="flex -gap-3">
                  <Puff height={20} width={20} color="#d1b112" />
                  Saving...
                </div>
              ) : (
                'Save'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;

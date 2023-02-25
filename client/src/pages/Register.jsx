import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signupUsers } from '../Features/slices/AuthSlice';
import PhoneInput from 'react-phone-number-input';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  county: '',
  city: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const [formData, setFormData] = useState(initialState);
  const [phoneNumber, setPhoneNumber] = useState();

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password deoesn't match");
    }
    if (firstName && lastName && email && password) {
      dispatch(signupUsers({ formData, navigate }));
    }
  };
  useEffect(() => {
    error && toast.error(error.message);
  }, [error]);

  const handleInputCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, phoneNumber: phoneNumber });
  };
  return (
    <div className="w-screen pr-4 md:w-1/2  h-fit flex mx-auto my-8 border-2 shadow-md">
      <div className="flex-1  flex flex-col justify-between items-between p-5  bg-[#1e3639] text-white">
        <h5 className="w-full md:w-1/2 text-md  font-bold">
          Get acess to your orders wishlists and recomendation
        </h5>
        <img src="./assets/30.png" alt="svgimage" />
      </div>
      <div className="flex-4 p-5 w-3/4 ">
        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h4 className="text-lg font-bold text-[#1e3639]">Register Here</h4>
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
              required
              onChange={handleInputCHange}
              className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              placeholder="email@gmail.com"
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
              required
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="flex-3 flex w-3/4  outline-0   mb-4  outline-0"
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
              required
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
              required
              onChange={handleInputCHange}
              className="flex-3 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
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
              required
              onChange={handleInputCHange}
              className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
            />
          </div>
          <div className="flex gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
            <label
              htmlFor="confirmPassword"
              className="flex-1 h-full text-sm text-bottom"
            >
              Confirm
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              onChange={handleInputCHange}
              className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
            />
          </div>
          <div className="flex gap-4 md:gap-11 justify-between w-full text-xl items-center font-semibold">
            <label htmlFor="city" className="flex-1 h-full text-sm text-bottom">
              City
            </label>
            <input
              type="name"
              name="city"
              id="city"
              required
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
              required
              onChange={handleInputCHange}
              className="flex-2 w-3/4 p-2 outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
            />
          </div>
          <button
            type="submit"
            className="w-1/2 text-white mt-6 flex items-center justify-center font-bold py-2 active:scale-105 mx-auto bg-[#1e3639]"
          >
            {loading ? (
              <div className="flex gap-3">
                <Circles height={20} width={20} color="#d1b112" />
                Loading...
              </div>
            ) : (
              'Register'
            )}
          </button>
        </form>
        <p className="text-center mt-24 text-md">
          Already have an account
          <Link to="/login">
            a <a className="font-bold text-[#1e3639]">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

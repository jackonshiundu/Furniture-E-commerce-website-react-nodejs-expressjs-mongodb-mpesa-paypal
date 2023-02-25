import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signinUsers } from '../Features/slices/AuthSlice';
import { Circles } from 'react-loader-spinner';
const initialState = {
  email: '',
  password: '',
};
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const [formData, setFormData] = useState(initialState);

  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(signinUsers({ formData, navigate }));
    }
  };
  useEffect(() => {
    error && toast.error(error.message);
  }, [error]);

  const handleInputCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="w-screen md:w-1/2  h-[30rem] flex mx-auto my-8 border-2 shadow-md">
      <div className="flex-1  flex flex-col justify-between items-between p-5 bg-[#1e3639]  text-white">
        <h5 className="w-full md:w-1/2 text-md  font-bold">
          Get acess to your orders wishlists and recomendation
        </h5>
        <img src="./assets/30.png" alt="svgimage" />
      </div>
      <div className="flex-4 p-5 w-3/4 ">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h4 className="text-lg font-bold text-[#1e3639]">Login Here</h4>
          <div className="flex items-center  gap-11 justify-between w-full text-xl font-semibold">
            <label
              htmlFor="email"
              className="flex-1 text-sm h-full text-bottom"
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
          <div className="flex items-center gap-11 justify-between w-full text-xl font-semibold">
            <label
              htmlFor="password"
              className="flex-1 h-full text-bottom text-sm"
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
              'Log in'
            )}
          </button>
        </form>
        <p className="text-center mt-24 text-md">
          Don't have an account
          <Link to="/register">
            <a className="font-bold text-[#1e3639]">Register</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

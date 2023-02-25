import React from 'react';
import { useState } from 'react';
import { Puff } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Contact = () => {
  const { user, error } = useSelector((state) => ({ ...state.auth }));
  const initialState = {
    email: user.result.email,
    fullName: user.result.name,
    message: '',
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { email, fullName, message } = formData;
  const handleInputCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    setTimeout(() => {
      toast.success('Sent Succesfully');
      navigate('/buyfurnitures');
    }, 3000);
  };
  return (
    <div className="flex flex-col   w-  md:h-screen  my-5 md:w-3/4 mx-auto">
      <h1 className="font-bold uppercase tracking-wider mb-4 mt-6 ml-3 ">
        Get In touch <span className="text-[#d1b112]">with us</span>
      </h1>
      <div className="flex ring-1 bg-[#dadde3] ring-[#1e3639] w-full shadow-lg  flex-col md:flex-row md:items-center">
        <div className="h-fit md:w-1/2">
          <img src="./assets/contact.svg" alt="contact" />
        </div>
        <div className=" p-5 w-full md:w-1/2">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <h2
              className="
            track-widest font-bold"
            >
              Pen It here
            </h2>
            <div className="flex items-center  gap-11 justify-between w-full text-xl font-semibold">
              <label
                htmlFor="email"
                className="flex-1 text-[#d1b112] font-bold text-sm h-full text-bottom"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                disabled
                onChange={handleInputCHange}
                className="flex-3 w-3/4 p-2 cursor-not-allowed outline-0 border-b-4 bg-[#8fb6bb] border-[#1e3639] focus:border-2 transition-all duration-500"
                placeholder="email@gmail.com"
              />
            </div>
            <div className="flex items-center gap-11 justify-between w-full text-xl font-semibold">
              <label
                htmlFor="fullName"
                className="flex-1 text-[#d1b112] font-bold h-full text-bottom text-sm"
              >
                Full Name:
              </label>
              <input
                type="name"
                name="fullName"
                id="fullName"
                required
                value={fullName}
                disabled
                onChange={handleInputCHange}
                className="flex-2 w-3/4 p-2 cursor-not-allowed  bg-[#8fb6bb] outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              />
            </div>
            <div className="flex  gap-11 justify-between w-full text-xl font-semibold">
              <label
                htmlFor="message"
                className="flex-1 text-[#d1b112] font-bold h-full text-bottom text-sm"
              >
                Message:
              </label>
              <textarea
                type="name"
                name="message"
                id="message"
                rows={6}
                required
                onChange={handleInputCHange}
                placeholder="Message..."
                className="flex-2 w-3/4 placeholder-black p-2 bg-[#8fb6bb] outline-0 border-b-4 border-[#1e3639] focus:border-2 transition-all duration-500"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 text-white mt-6 flex items-center justify-center font-bold py-2 active:scale-105 mx-auto bg-[#1e3639]"
            >
              {loading ? (
                <div className="flex gap-3">
                  <Puff height={20} width={20} color="#d1b112" />
                  loading
                </div>
              ) : (
                'Send '
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

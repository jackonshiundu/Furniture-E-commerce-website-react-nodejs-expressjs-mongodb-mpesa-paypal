import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortBySearchQuery } from '../Features/slices/filterSlice';

const Searchcomponent = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  function handleChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
  }
  console.log(searchTerm);
  return (
    <form
      className="w-3/4 mx-auto  md:w-3/4 flex  "
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(sortBySearchQuery(searchTerm));
        setSearchTerm('');
      }}
    >
      <input
        type="search"
        name="searchTerm"
        onChange={handleChange}
        value={searchTerm}
        className="w-full  p-2 border-0 outline-0 text-lg focus:border-2 border-[#d1b112] bg-[#dadde3]"
      />
      <button className="bg-[#d1b112] px-3 font-bold text-[#dadde3] active:scale-105 w-24 transition-all duration-300">
        Search
      </button>
    </form>
  );
};

export default Searchcomponent;

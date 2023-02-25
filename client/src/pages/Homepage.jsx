import React from 'react';
import Categories from '../components/Categories';
import Featuredctegory from '../components/Featuredctegory';
import Herosection from '../components/Herosection';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

const Homepage = () => {
  return (
    <>
      <Herosection />
      <Categories />
      <Newsletter />
      <Featuredctegory />
      <Testimonials />
    </>
  );
};

export default Homepage;

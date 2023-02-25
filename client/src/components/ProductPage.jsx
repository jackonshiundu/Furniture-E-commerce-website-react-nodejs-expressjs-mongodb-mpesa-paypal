import React, { useState } from 'react';
import Filter from './Filter';
import Productonlypage from './Productonlypage';
import Searchcomponent from './Searchcomponent';

const ProductPage = () => {
  return (
    <div className="mt-7 w-full ">
      <Searchcomponent />
      <div className="flex flex-col sm:flex-row mt-7 max-w-screen-xl sm:mx-auto mx-7 scroll">
        <Filter />
        <Productonlypage />
      </div>
    </div>
  );
};

export default ProductPage;

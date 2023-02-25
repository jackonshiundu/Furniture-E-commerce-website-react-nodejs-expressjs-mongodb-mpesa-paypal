import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
const Productonlypage = () => {
  const { allProducts,  loading } = useSelector((state) => ({
    ...state.product,
  }));
  const {  price,  byColor, byStock, byRating, searchQuery, byBrand } =
  useSelector((state) => ({
    ...state.filter,
  }))
  const transformProducts = () => {
    let sortedProducts = [...allProducts];
    if (price) {
      sortedProducts = sortedProducts.sort((a, b) =>
        price === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (p) => Math.round(p.rating) === byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <div className="flex-4 w-full ">
      <h3 className="text-center uppercase text-sm md:text-2xl font-bold mb-8">
        Shop The <span className="text-[#d1b112]">Finest products and</span> at
        an affodable price
      </h3>
      {loading && (
        <div className="w-screen h-screen flex items-center justify-center">
          <BallTriangle height={90} width={90} color="#d1b112" />
        </div>
      )}
      <div className="w-full gap-3 md:gap-5  p-2 md:p-9  flex flex-wrap  justify-evenly  md:justify-around">
        {transformProducts().map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Productonlypage;

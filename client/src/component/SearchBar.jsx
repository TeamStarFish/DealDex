import React, { useEffect, useState } from "react";
import ProductSpecifications from "./ProductSpecifications.jsx";

export default function SearchBar(props) {
  const { product, handleSelect, updateFilter } = props;
  //table format!!! what kind of data are we getting back? is it an object? an array? pref array tho

  return (
    <div className='flex flex-col min-w-[200px] items-start flex-grow border border-blue-400 border-solid'>
      <div>
        <select
          value={product}
          onChange={(e) => handleSelect(e)}
          className='block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
          <option value=''>Select product</option>
          <option value='Computer Monitors'>Monitors</option>
          <option value='TVs'>TVs</option>
        </select>
      </div>
      {product === "Computer Monitors" && (
        <div>
          <ProductSpecifications
            product={product}
            updateFilter={updateFilter}
          />
        </div>
      )}
      {product === "TVs" && (
        <div>
          <ProductSpecifications
            product={product}
            updateFilter={updateFilter}
          />
        </div>
      )}
      <div className='mt-auto w-full'>
        <button
          className='w-full bg-green-500 text-white font-bold py-2 px-4 hover:bg-green-800 rounded mt-10'
          type='button'>
          Search
        </button>
      </div>
    </div>
  );
}

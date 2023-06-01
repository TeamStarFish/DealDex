import React, { useEffect, useState } from "react";
import ProductSpecifications from "./ProductSpecifications.jsx";

export default function SearchBar(props) {
  const { product, handleSelect, updateFilter } = props;
  //table format!!! what kind of data are we getting back? is it an object? an array? pref array tho

  return (
    <div className='flex flex-col min-w-[200px] items-start flex-grow'>
      <div className='py-4 px-6'>
        <select
          value={product}
          onChange={(e) => handleSelect(e)}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
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
      <div className='w-full'>
        <button
          className='w-full bg-green-500 text-white font-bold py-2 px-4 hover:bg-green-800 rounded mt-10'
          type='button'>
          Search
        </button>
      </div>
    </div>
  );
}

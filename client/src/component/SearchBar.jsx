import React, {useEffect, useState} from 'react';
import ProductSpecifications from './ProductSpecifications.jsx'
// import data fetching api

export default function SearchBar(props) {
  const {updateProduct, } = props;
  const [productOptions, setProductOption] = useState('');

  // use effect hook 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // placeholder for api fetch
        const data = await fetchDataFromApi(); //fetchdatafromapi is placeholder
        updateProduct(data);
      } catch (error) {
        console.log({error: error.message});
      }
    }

    fetchProduct();
  }, [updateProduct])

  const handleSelect = (event) => {
    setProductOption(event.target.value);
  }
  //table format!!! what kind of data are we getting back? is it an object? an array? pref array tho
  // need actual name for api fetch req (end point)
  // 
  return (
    <div className="flex-grow border border-blue-400 border-solid">
      <h1>This is the search bar</h1>
      <div>
        <select
          value={productOptions}
          onChange={handleSelect}
          className="block appearance-none w-calc{full - 10} bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select an option</option>
          <option value="Computer Monitors">Monitors </option>
          <option value="TVs">TVs </option>
        </select>
      </div>
      {productOptions === 'Computer Monitors' && (
        <div>
          <ProductSpecifications />
        </div>
      )}
    </div>
  );
}

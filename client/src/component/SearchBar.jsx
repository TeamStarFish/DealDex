import React, {useEffect, useState} from 'react';
import ProductSpecifications from './ProductSpecifications.jsx'
// import data fetching api

export default function SearchBar(props) {
  const {updateProduct} = props;
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

  const handleSelect = async (event) => {
    
    try {
      setProductOption(event.target.value);
  
      // set up get request here
      // should send the product category to the backend and return specs to be loaded on the search bar
      const response = await axios.get('/api/category', {category: productOptions});
      console.log(response);
      // response should be an array of objects which are monitor listings
      // send category type and response to product specs component for further rendering


    } catch (error) {
      console.log('Error sending product category to backend.');
    }
  }
  //table format!!! what kind of data are we getting back? is it an object? an array? pref array tho
  // need actual name for api fetch req (end point)
  // 
  return (
    <div className="flex flex-col items-start flex-grow border border-blue-400 border-solid">
      <h1>This is the search bar</h1>
      <div>
        <select
          value={productOptions}
          onChange={handleSelect}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select product</option>
          <option value="Computer Monitors">Monitors</option>
          <option value="TVs">TVs</option>
        </select>
      </div>
      {productOptions === 'Computer Monitors' && (
        <div>
          <ProductSpecifications productOptions={productOptions} />
        </div>
      )}
      {productOptions === 'TVs' && (
        <div>
          <ProductSpecifications productOptions response />
        </div>
      )}
      <div className="mt-auto w-full">
        <button
          className="w-full bg-green-500 text-white font-bold py-2 px-4 hover:bg-green-800 rounded mt-10"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
  
}

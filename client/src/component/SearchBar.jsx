import React, {useEffect, useState} from 'react';
import ProductSpecifications from './ProductSpecifications.jsx'
// import data fetching api

export default function SearchBar(props) {
  const { updateProduct } = props;
  const [productOptions, setProductOption] = useState('');
  let productData = [];
  // use effect hook 
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       // placeholder for api fetch
  //       const data = await fetchDataFromApi(); //fetchdatafromapi is placeholder
  //       updateProduct(data);
  //     } catch (error) {
  //       console.log({error: error.message});
  //     }
  //   }

  //   fetchProduct();
  // }, [updateProduct])

  const handleSelect = async (event) => {
    const selectedCategory = event.target.value;
    setProductOption(event.target.value);
    await handleData(selectedCategory);
  }

  const handleData = async (selectedCategory) => {

      try {
        const response = await fetch('/api/category', {
          method: 'POST',
          // mode: 'no-cors',
          body: JSON.stringify({category: selectedCategory}),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        });
        const data = await response.json();
        productData = data;
        // response should be an array of objects which are monitor listings
        // send category type and response to product specs component for further rendering
        console.log(data);
  
  
      } catch (error) {
        console.log({
          log: 'handleError',
          status: 400,
          message: 'blew up in handleData ', error
        });
      }
    }
    // test();}
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
          <option value="TV">TVs</option>
        </select>
      </div>
      {productOptions === 'Computer Monitors' && (
        <div>
          <ProductSpecifications productOptions={productOptions} productData={productData} />
        </div>
      )}
      {productOptions === 'TV' && (
        <div>
          <ProductSpecifications productOptions={productOptions} productData={productData} />
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

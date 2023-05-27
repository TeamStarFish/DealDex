import React, {useEffect} from 'react';
import ProductSpecs from './ProductSpecifications.jsx'
// import data fetching api

export default function SearchBar({updateProduct}) {

  // use effect hook 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // placeholder for api fetch
        const data = await fetchDataFromApi();
        updateProduct(data);
      } catch (error) {
        console.log({error: error.message});
      }
    }

    fetchProduct();
  }, [updateProduct])



  return (
    <div>
      <h1>this the search bar</h1>
      <ProductSpecs />
    </div>
  );
}

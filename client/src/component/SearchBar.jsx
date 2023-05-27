import React, {useEffect} from 'react';
import ProductSpecifications from './ProductSpecifications.jsx'
// import data fetching api

export default function SearchBar(props) {
  const {updateProduct, } = props;

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

  //table format!!! what kind of data are we getting back? is it an object? an array? pref array tho
  // need actual name for api fetch req (end point)
  // 
  return (
    <div>
      <h1>this the search bar</h1>
      <ProductSpecifications />
    </div>
  );
}

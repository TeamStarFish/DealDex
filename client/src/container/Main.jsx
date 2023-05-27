import React, {useState} from 'react';
import ProductList from '../component/ProductList.jsx';
import SearchBar from '../component/SearchBar.jsx';
import Owen from '../component/Owen.jsx';

export default function Main() {

  // define state variable 
  const [product, setProduct] = useState('');
  const [specs, setSpecs] = useState([]); // or {} depends on backend
  const [filteredHits, setFilteredHits] = useState([]); // or {} depends on backend

  // define function to update state variable
  const updateProduct = (data) => {
    setProduct(data);
  }

  return (
    <div> 
      <div> 
        <SearchBar 
          updateProduct={updateProduct} 
          specs={specs}
          />
        <Owen/>
      </div>
      <div> 
        <ProductList 
          product={product}
          filteredHits={filteredHits}
         />
      </div>
    </div>
  )
}
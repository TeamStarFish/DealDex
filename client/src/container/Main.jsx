import React, {useState} from 'react';
import ProductList from '../component/ProductList.jsx';
import SearchBar from '../component/SearchBar.jsx';
import Owen from '../component/Owen.jsx';

export default function Main() {

  // define state variable 
  const [product, setProduct] = useState(null);
  const [specs, setSpecs] = useState(null);
  const [filteredHits, setFilteredHits] = useState(null);

  // define function to update state variable
  const updateProduct = (data) => {
    setProduct(data);
  }
  
  return (
    <div> 
      <div> 
        <SearchBar updateProduct={updateProduct} />
        <Owen/>
      </div>
      <div> 
        <ProductList product={product} />
      </div>
    </div>
  )
}
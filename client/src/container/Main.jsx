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
    <div className="border border-solid border-green-400 flex flex-grow bg-green-100"> 
      <div className="flex flex-col flex-shrink border-solid border border-red-400 w-56"> 
        <SearchBar 
          updateProduct={updateProduct} 
          specs={specs}
          />
        <Owen/>
      </div>
      <div className="flex flex-grow border-solid border border-red-400"> 
        <ProductList 
          product={product}
          filteredHits={filteredHits}
        />
      </div>
    </div>
  )
}








/*
import React, { useState } from 'react';

const ParentComponent = () => {
  const [data, setData] = useState('');

  const handleDataChange = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onDataChange={handleDataChange} />
      <p>Data from child: {data}</p>
    </div>
  );
};

export default ParentComponent;



/////////////////

import React from 'react';

const ChildComponent = ({ onDataChange }) => {
  const sendDataToParent = () => {
    const data = 'Hello from child!';
    onDataChange(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
*/

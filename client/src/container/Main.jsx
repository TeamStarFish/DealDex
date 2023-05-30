import React, {useState} from 'react';
import ProductList from '../component/ProductList.jsx';
import SearchBar from '../component/SearchBar.jsx';
import Owen from '../component/Owen.jsx';

export default function Main() {

  // define state variable 
  const [product, setProduct] = useState('');
  const [specs, setSpecs] = useState([]); // or {} depends on backend 
  //const [filteredHits, setFilteredHits] = useState([]); // or {} depends on backend
  const [userFilters, setUserFilters] = useState({});
 

  /*
    useEffect to fetch product names from Product Table ( does not exist yet :) )
    so here is some hard code
  */

  const updateFilter = (event, key) => {
    //takes a key (spec), and an input (event.target), and adds it to userFilters
    const dummyObj = {};
    dummyObj[key] = event.target.value;
    const newUserFilters = Object.assign({}, userFilters, dummyObj);
    setUserFilters(newUserFilters);
  }

  const handleSelect = async (event) => {
    const selectedCategory = event.target.value;
    setProduct(event.target.value);

    try {
      const response = await fetch('/api/category', {
        method: 'POST',
        body: JSON.stringify({category: selectedCategory}),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });
      const data = await response.json();
      // response should be an array of objects which are product listings
      // send category type and response to product specs component for further rendering
      setSpecs(data);


    } catch (error) {
      console.log({
        log: 'handleError',
        status: 400,
        message: 'blew up in handleData ', error
      });
    }
  }
  
  return (
    <div className="border border-solid border-green-400 flex flex-grow bg-green-100"> 
      <div className="flex flex-col flex-shrink border-solid border border-red-400 w-56"> 
        <SearchBar 
          handleSelect={handleSelect}
          product={product}
          specs={specs}
          updateFilter={updateFilter}
          />
        <Owen/>
      </div>
      <div className="flex flex-grow border-solid border border-red-400"> 
        <ProductList 
          product={product}
          specs={specs}
        />
      </div>
    </div>
  )
}

//ideally we dont need to drill specs down into product list, but for presentation purposes we are drilling specs down into product list

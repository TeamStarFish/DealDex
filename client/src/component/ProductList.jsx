import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList() {
  let arr = ['size', 'pixels', 'girth', 'power', 'torque', 'acornsPerMinute'];
  return (
    <div>
      <h1>product category, drilled from main TV</h1>
      {arr.map((ele, i) => (
        <ProductCard 
          key={i}
          spec={ele}
        />
      ))}
    </div>
  );
}

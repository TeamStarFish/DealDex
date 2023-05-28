import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList(props) {
  //const { product } = props;
  const product = 'Monitor'
  let arr = ['size', 'pixels', 'girth', 'power', 'torque', 'acornsPerMinute'];
  return (
    <div className="flex flex-col border border-solid border-red-400 flex-grow">
      <p className="border border-solid border-black text-center">
        {product+'s'}
      </p>
      <div className="border border-solid border-purple-400 flex-grow overflow-y-auto">
        {arr.map((ele, i) => (
          <ProductCard key={i} spec={ele} />
        ))}
      </div>
    </div>
  );
}

//in line 9-11 element, currently centered based on parent element size, maybe try to center based on total width? not sure how to do it tbh
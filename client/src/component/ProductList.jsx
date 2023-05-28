import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList(props) {
  const { product } = props;
  let arr = ['size', 'pixels', 'girth', 'power', 'torque', 'acornsPerMinute'];
  return (
    <div className="flex flex-col border border-solid border-red-400 flex-grow">
      <p className="border border-solid border-black text-center">
        product category, drilled from main TV
      </p>
      <div className="border border-solid border-purple-400 flex-grow">
        {arr.map((ele, i) => (
          <ProductCard key={i} spec={ele} />
        ))}
      </div>
    </div>
  );
}

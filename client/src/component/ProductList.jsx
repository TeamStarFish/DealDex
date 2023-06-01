import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList(props) {
  const { product, specs } = props;

  return (
    <div className="flex flex-col border border-solid border-red-400 flex-grow items-stretch ">
      <p className="border border-solid border-black text-center">{product}</p>
      <div className="h-20 grid grid-cols-3 border overflow-y-scroll border-solid border-purple-400 flex-grow justify-start items-start gap-8 m-4 flex-wrap">
        {specs.map((ele, i) => (
          <ProductCard
            key={'prodcard' + i}
            name={ele.title}
            price={ele.price}
            imageURL={ele.image}
            // specs={ele}
          />
        ))}
      </div>
    </div>
  );
}

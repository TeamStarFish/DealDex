import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList(props) {
  //const { product } = props;
  const product = 'Monitor'
  let arrNames = ['spicy tv', 'ginger tv', 'sporty tv', 'baby tv', 'posh tv', 'lol idk']
  let arrDummySpecs = [{sizeOfTV: 'huge'}, {pixels: 100000}, {girth: 'hella'}, {power: 9001}, {torque: 'idk tbh'}, {acornsPerMinute: 'ungodly amount'}];

  //maybe more like:
  /*
    response: [
      {
        name: 'dafsd'
        picUrl: 'asdlkfjal'
        specs[{},{},{},]
      },
      {
        name: 'dafsd1'
        picUrl: 'asdlkfjal1'
        specs[{},{},{},]
      },
    ]

  */
  return (
    <div className="flex flex-col border border-solid border-red-400 flex-grow overflow-y-auto">
      <p className="border border-solid border-black text-center">
        {product+'s'}
      </p>
      <div className="grid grid-cols-3 border-2 border-solid border-purple-400 flex-grow justify-start items-start gap-8 m-4  flex-wrap">
        {arrNames.map((ele, i) => (
          <ProductCard 
            key={'prodcard'+i} 
            name={ele}
            spec={arrDummySpecs} 
            />
        ))}
      </div>
    </div>
  );
}

//in line 9-11 element, currently centered based on parent element size, maybe try to center based on total width? not sure how to do it tbh
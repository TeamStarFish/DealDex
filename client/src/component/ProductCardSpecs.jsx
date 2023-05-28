import React from 'react';

export default function ProductCardSpecs(props) {
  //dummy props
  const { spec, specVal } = props;
  return (
    <div>
      <p><strong>{spec}</strong></p>
      <p>{specVal[spec]}</p>
    </div>
  );
}


// specs={keyArr[i]}
// specVals={ele}
// <div className="border border-solid border-orange-400">
//       <h1>{name}</h1>
//       <img className="object-scale-down h-48 w-48"
//         src={imageURL}></img>
//       <p>price: {'$'+ price}</p>
//       <div>
//         {spec.map((ele, i) => (
          
//         ))}
//       </div>
//     </div>
import React from 'react';

export default function ProductCardSpecs(props) {
  const { spec, specVal } = props;
  return (
    <div className="m-1">
      <p className="text-center"><strong>{spec}</strong></p>
      <p className="text-center">{specVal}</p>
    </div>
  );
}
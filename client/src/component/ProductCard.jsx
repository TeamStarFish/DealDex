import React from 'react';

export default function ProductCard(props) {
  const { spec } = props;
  return (
    <div>
      <h1>Product Card</h1>
      <div>
        <p>{spec}</p>
      </div>
    </div>
  );
}

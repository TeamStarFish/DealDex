import React from 'react';
import PriceMax from './Specs/PriceMax.jsx';
import PriceMin from './Specs/PriceMin.jsx';
import Size from './Specs/Size.jsx';
import Resolution from './Specs/Resolution.jsx';
import RefreshRate from './Specs/RefreshRate.jsx';
// this has a lot of imports for now, would like to make this more modular in the future


export default function ProductSpecifications(props) {
  const {product} = props;
  
  return (
    <div>
      {product === 'Computer Monitors' && (
        <div>
          <PriceMax />
          <PriceMin />
          <Size/>
          <Resolution monitorSpecs />
          <RefreshRate monitorSpecs />
          </div>
      )}
      {product === 'TVs' && (
        <div>
          <PriceMax />
          <PriceMin />
          <Size />
          <Resolution tvSpecs />
          </div>
      )}
    </div>
  );
}

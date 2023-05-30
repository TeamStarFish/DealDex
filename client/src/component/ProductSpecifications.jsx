import React from 'react';
import PriceMax from './Specs/PriceMax.jsx';
import PriceMin from './Specs/PriceMin.jsx';
import Size from './Specs/Size.jsx';
import Resolution from './Specs/Resolution.jsx';
import RefreshRate from './Specs/RefreshRate.jsx';


export default function ProductSpecifications(props) {
  // destructure product selection specs from props
  const {productOptions, productData} = props;
  
  return (
    <div>
      <h1>productspecs! unpack them spec components</h1>
      {productOptions === 'Computer Monitors' && (
        <div>
          <h2>Monitor Specs </h2>
          <PriceMax />
          <PriceMin />
          <Size/>
          <Resolution monitorSpecs />
          <RefreshRate monitorSpecs />
          </div>
      )}
      {productOptions === 'TV' && (
        <div>
          <h2>TV Specs </h2>
          <PriceMax />
          <PriceMin />
          <Size />
          <Resolution tvSpecs />
          </div>
      )}
    </div>
  );
}

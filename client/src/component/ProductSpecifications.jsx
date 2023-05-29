import React from 'react';
import PriceMax from './Specs/PriceMax.jsx';
import PriceMin from './Specs/PriceMin.jsx';
import Size from './Specs/Size.jsx';
import Resolution from './Specs/Resolution.jsx';
import RefreshRate from './Specs/RefreshRate.jsx';


export default function ProductSpecifications(props) {
  // destructure product selection specs from props
  const {monitorSpecs, tvSpecs} = props;

  return (
    <div>
      <h1>productspecs! unpack them spec components</h1>
      {monitorSpecs && (
        <div>
          <h2>Monitor Specs </h2>
          <PriceMax></PriceMax>
          <PriceMin></PriceMin>
          <Size></Size>
          <Resolution monitorSpecs></Resolution>
          <RefreshRate monitorSpecs></RefreshRate>
          </div>
      )}
      {tvSpecs && (
        <div>
          <h2>TV Specs </h2>
          <PriceMax></PriceMax>
          <PriceMin></PriceMin>
          <Size></Size>
          <Resolution tvSpecs></Resolution>
          </div>
      )}
    </div>
  );
}

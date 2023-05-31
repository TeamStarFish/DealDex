import React from "react";
import Resolution from "./Specs/Resolution.jsx";
import RefreshRate from "./Specs/RefreshRate.jsx";
// this has a lot of imports for now, would like to make this more modular in the future

export default function ProductSpecifications(props) {
  const { product } = props;

  const inputStyle = {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "100%",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    borderColor: "#D1D5DB",
  };

  return (
    <div>
      {product === "Computer Monitors" && (
        <div>
          <input type='text' placeholder='Max Price' style={inputStyle}></input>
          <input type='text' placeholder='Min Price' style={inputStyle}></input>
          <input
            type='text'
            placeholder='Size (inches)'
            style={inputStyle}></input>
          <Resolution monitorSpecs />
          <RefreshRate monitorSpecs />
        </div>
      )}
      {product === "TVs" && (
        <div>
          <input type='text' placeholder='Max Price' style={inputStyle}></input>
          <input type='text' placeholder='Min Price' style={inputStyle}></input>
          <input
            type='text'
            placeholder='Size (inches)'
            style={inputStyle}></input>
          <Resolution tvSpecs />
        </div>
      )}
    </div>
  );
}

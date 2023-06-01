import React from "react";
import Resolution from "./Specs/Resolution.jsx";
import RefreshRate from "./Specs/RefreshRate.jsx";
// this has a lot of imports for now, would like to make this more modular in the future

export default function ProductSpecifications(props) {
  const { product } = props;

  const inputStyle = {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.3rem",
    paddingRight: "1rem",
    backgroundColor: "#ffffff",
    color: "#1F2937",
    fontWeight: "600",
    borderRadius: "0.25rem",
    borderWidth: "1px",
    borderColor: "#9CA3AF",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    width: "100%",
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

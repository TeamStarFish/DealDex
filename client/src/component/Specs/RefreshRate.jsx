import React, { useState } from "react";

export default function RefreshRate(props) {
  const { monitorSpecs } = props;
  // const [tvFPS, setTvFPS] = useState('');
  const [monitorFPS, setMonitorFPS] = useState("");

  const handleSelect = (event) => {
    setMonitorFPS(event.target.value);
    // || setTvFPS(event.target.value);
  };

  return (
    <div>
      {monitorSpecs && (
        <select
          value={monitorFPS}
          onChange={handleSelect}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 w-full border border-gray-400 rounded shadow'>
          <option value=''>Select refresh rate</option>
          <option value='60Hz'>60Hz </option>
          <option value='120Hz'>120Hz </option>
          <option value='144Hz'>144Hz </option>
          <option value='240Hz'>240Hz </option>
        </select>
      )}
    </div>
  );
}

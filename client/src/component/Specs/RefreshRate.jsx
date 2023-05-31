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
          className='block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
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

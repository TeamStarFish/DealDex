import React, { useState } from "react";

export default function Resolution(props) {
  const { monitorSpecs, tvSpecs } = props;
  const [tvRes, setTvRes] = useState("");
  const [monitorRes, setMonitorRes] = useState("");

  const handleSelect = (event) => {
    setTvRes(event.target.value) || setMonitorRes(event.target.value);
  };

  return (
    <div>
      {tvSpecs && (
        <select
          value={tvRes}
          onChange={handleSelect}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 w-full border border-gray-400 rounded shadow'>
          <option value=''>Select resolution</option>
          <option value='720p'>720p </option>
          <option value='1080p'>1080p </option>
          <option value='4K'>4K </option>
          <option value='8K'>8K </option>
        </select>
      )}
      {monitorSpecs && (
        <select
          value={monitorRes}
          onChange={handleSelect}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 w-full border border-gray-400 rounded shadow'>
          <option value=''>Select resolution</option>
          <option value='720p'>720p </option>
          <option value='1080p'>1080p </option>
          <option value='1440p'>1440p </option>
          <option value='2560p'>2560p </option>
        </select>
      )}
    </div>
  );
}

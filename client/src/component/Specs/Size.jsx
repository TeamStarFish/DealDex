import React from "react";


export default function Size() {

return (
    <input
      type='text'
      placeholder='Size (inches)'
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
    
    </input>
  );
}


// I was going to make these dropdowns, but having so many different sized monitors and tvs,
// I think it's best to leave them as user input for now.
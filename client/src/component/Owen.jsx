import React from 'react';

/*
  very important section,
  acorn button clickable, pulls up owen meme page
 */
export default function Owen() {
  const handleClick = () => {

  }
  return (
    <button className="justify-center justify-items-center content-center items-center self-center">
      <img className="object-scale-down h-28"
        src="https://i.ibb.co/2gxfCKh/owen.png"
        id="owen"
        alt="owen"
        border="0"
        onClick={handleClick}
      />
    </button>
  );
}

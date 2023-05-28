import React from 'react';

export default function ProductCard(props) {
  const { spec } = props;
  return (
    <div>
      <h1>Product Card</h1>
      <div>
        <p>{spec}</p>
      </div>
    </div>
  );
}

//potentially bulky css incoming

/*    IDEAS
  NAME OF PRODUCT (MINUS WEIRD ASS TECH SPECS IN TITLE?)
  card div holds an image, scaled down to fit the card
  MAKER, sony etc
  price, ordered from least to greatest
  specs bolded, and printed either in line or if we stick to 4 specs, we can do 4 corners of a div?
  space between for cards,
  overflow y axis
*/
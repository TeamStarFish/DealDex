import React from 'react';

export default function ProductCard(props) {
  //dummy props
  const title = 'super awesome tv';
  const imageURL =
    'https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
  const price = '100000'
  const { spec } = props;
  return (
    <div className="border border-solid border-orange-400 ">
      <h1>{title}</h1>
      <img className="object-scale-down h-48 w-48"
        src={imageURL}></img>
      <p>price: {'$'+ price}</p>
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

  specs = [{"spec": "specValue"}, {"spec2: specValue2"}]
  or
  specs = [["spec": "specValue"], ["spec2: specValue2"]]
  or
  specs = {
    spec1: spec1value
    spec2: spec2value
    etc
  }
*/

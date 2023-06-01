import React from 'react';
// import ProductCardSpecs from './ProductCardSpecs.jsx';

export default function ProductCard(props) {
  //dummy url for now
  // const imageURL =
  //   'https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
  const { name, price, specs, imageURL } = props;

  // creating key array so we can use map to render the product card specs
  // these show up underneath the product card name, image, and price
  // this is not an ideal method but due for MVP purposes it's what we've got lol
  // let keyArr = [];
  // let results = [];
  // if(specs){
  //   keyArr = Object.keys(specs);
  //   // filter out the name, price, and category since these are already displayed
  //   results = keyArr.filter(ele => ele !== 'img' && ele !== 'category' && ele !== 'price' && ele !== 'productname');
  // }

  return (
    <div className="h-100 w-100">
      <h1 className="text-center text-[24px]">{name}</h1>
      <img
        className="object-scale-down h-64 w-64 block mx-auto"
        src={imageURL}
      ></img>
      <p className="text-center text-[20px]">{'$' + price}</p>
      <div className="grid grid-cols-2 m-4">
        {/* {results.map((ele, i) => (
          <ProductCardSpecs
            key={results[i]+i} 
            spec={ele}
            specVal={specs[ele]}
          />
        ))} */}
      </div>
    </div>
  );
}

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

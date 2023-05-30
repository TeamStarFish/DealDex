// INSERT INTO products VALUES ('Computer Monitors', 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', 173.99, 23.8, 1080, 60);

// INSERT INTO products VALUES ('Computer Monitors', 'MNN Portable Monitor 15.6inch FHD 1080P Laptop Monitor USB C HDMI Gaming Ultra-Slim IPS Display w/Smart Cover & Speakers,HDR Plug&Play, External Monitor for Laptop PC Phone Mac Xbox PS5/PS4 Switch', 116.92 , 15.6, 1080, 60);

// INSERT INTO products VALUES ('TV', 'VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model', 168, 40, 1080, 60);

// INSERT INTO products VALUES('Amazon Fire TV 50\" 4-Series 4K UHD smart TV, stream live TV without cable', 136, 13.2, 1080, 60);

// dataController.fetchData = (req, res, next) => {
//   console.log('begin fetch');
//   // set up the request parameters
//   const params = {
//     api_key: '124F406942C541BCAE413ED2A5A6A018',
//     type: 'category',
//     category_id: '1292115011',
//     amazon_domain: 'amazon.com',
//   };

//   // Make the http GET request to Rainforest API and store data into MongoDB so we aren't logging through the data each request

//   axios
//     .get('https://api.rainforestapi.com/request', { params })
//     .then((response) => {
//       // print the JSON response from Rainforest API
//       const data = JSON.stringify(response.data, 0, 2);

//       console.log(JSON.stringify(response.data, 0, 2));

//       return next();
//     })
//     .catch((error) => {
//       // catch and print the error
//       console.log(error);
//     });
// };

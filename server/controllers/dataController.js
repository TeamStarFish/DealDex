const { query } = require('express');
const db = require('../models/itemModel');
const axios = require('axios');

// set up the request parameters

const dataController = {};

dataController.fetchData = (req, res, next) => {
  const axios = require('axios');

  // set up the request parameters
  const params = {
    api_key: '124F406942C541BCAE413ED2A5A6A018',
    type: 'category',
    category_id: '1292115011',
    amazon_domain: 'amazon.com',
  };

  // make the http GET request to Rainforest API
  axios
    .get('https://api.rainforestapi.com/request', { params })
    .then((response) => {
      // print the JSON response from Rainforest API
      console.log(JSON.stringify(response.data, 0, 2));
      return next();
    })
    .catch((error) => {
      // catch and print the error
      console.log(error);
    });
};

module.exports = dataController;

const { query } = require('express');
const db = require('../models/itemModel');
const axios = require('axios');
import ProductModel from '../models/Product';

// set up the request parameters

const dataController = {};

dataController.fetchData = (req, res, next) => {
  console.log('begin fetch');
  // set up the request parameters
  const params = {
    api_key: '124F406942C541BCAE413ED2A5A6A018',
    type: 'category',
    category_id: '1292115011',
    amazon_domain: 'amazon.com',
  };

  // Make the http GET request to Rainforest API and store data into MongoDB so we aren't logging through the data each request

  axios
    .get('https://api.rainforestapi.com/request', { params })
    .then((response) => {
      // print the JSON response from Rainforest API
      const data = JSON.stringify(response.data, 0, 2);

      console.log(JSON.stringify(response.data, 0, 2));

      return next();
    })
    .catch((error) => {
      // catch and print the error
      console.log(error);
    });
};

module.exports = dataController;

const { query } = require('express');
const db = require('../models/itemModel');
const data = require("./TEST_DATA");

const productController = {};

productController.fetchProducts = async (req, res, next) => {
  const search = req.body.search.replace(/\s/g, "%20");

  const url = `https://real-time-product-search.p.rapidapi.com/search?q=${search}&country=us&language=en&sort_by=TOP_RATED`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3f1385b474msh5cc468c6c6ca770p1784a6jsne23de33e28ca',
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    // console.log(result);

    res.locals.products = result.data.map((product) => {
      const { product_title, product_photos } = product;
      const { store_name, offer_page_url, price, product_condition } = product.offer;
      return {
        product_title, 
        product_photos,
        store_name, 
        offer_page_url, 
        price, 
        product_condition
      }
    })

    next();
  } catch (error) {
    console.error(error);
  }
}

// product_title
// product_photos[0]
// offer.store_name
// offer.offer_page_url
// offer.price
// offer.product_condition

module.exports = productController;

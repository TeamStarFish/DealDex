const { query } = require('express');
const db = require('../models/itemModel');

// set up the request parameters

const productController = {};

productController.fetchProducts = async (req, res, next) => {
  const { category } = req.body;

  const queryStr = `
  SELECT * FROM products
  WHERE category = '${category}'`;

  try {
    const response = await db.query(queryStr);
    res.locals.products = response.rows;
    return next();
  } catch (err) {
    return next({
      log: 'fetchProducts',
      status: 400,
      message: `Error in returning fetched Product, ${err}`,
    });
  }
};

module.exports = productController;

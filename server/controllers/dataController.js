const { query } = require('express');
const db = require('../models/itemModel');
const axios = require('axios');

// set up the request parameters

const dataController = {};

dataController.fetchProducts = async (req, res, next) => {
  const { category } = req.body;
  const queryStr = `
  SELECT * FROM products
  WHERE category = ${category}`;
  try {
    const response = await db.query(queryStr);
    res.locals.products = response.rows;
    return next();
  } catch (err) {
    return next({ error: `Error in returning fetched Product, ${err}` });
  }
};

module.exports = dataController;

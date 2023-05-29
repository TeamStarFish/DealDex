// const axios = require('axios');
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// router.get('/api/request', dataController.fetchData, (req, res) => {
//   res.status(200).json({ message: 'Fetched data successful' });
// });

router.get('/api/category', dataController.fetchProducts, (req, res) => {
  return res.status(200).json(res.locals.products);
});

module.exports = router;

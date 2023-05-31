const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// router.get('/request', dataController.fetchData, (req, res) => {
//   res.status(200).json({ message: 'Fetched data successful' });
// });

// router.get('/category', dataController.fetchProducts, (req, res) => {
//   return res.status(200).json(res.locals.products);
// });

router.post('/search', productController.fetchProducts, (req, res) => {
  return res.status(200).json(res.locals.products);
});

module.exports = router;

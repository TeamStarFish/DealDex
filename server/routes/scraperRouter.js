const express = require('express');
const router = express.Router();
const scraperController = require('../controllers/scraperController');

router.get('/scrape', scraperController.scrape, scraperController.findRelevant, (req, res) => {
  return res.status(200).json(res.locals.products);
});

module.exports = router;
// const { JSDOM } = require('jsdom');

const scraperController = {};

const url =
  'https://www.amazon.com/Sony-PlayStation-Pro-1TB-Console-4/dp/B07K14XKZH/';

scraperController.scrape = async (req, res, next) => {
  try {
    const resp = await fetch(url);
    console.log((res.locals.html = await resp.text()));
    return next();
  } catch (err) {
    return next({
      log: `Error in scraperController.scrape: ${err}`,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

// const { document } = new JSDOM()

module.exports = scraperController;

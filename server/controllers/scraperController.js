const { JSDOM } = require('jsdom');

const scraperController = {};

const url = 'https://www.amazon.com/s?k=monitors&qid=1685563321&ref=sr_pg_1';
const header = new Headers({
  'User-Agent': 'My User Agent',
});

scraperController.scrape = async (req, res, next) => {
  try {
    const resp = await fetch(url, {
      headers: header,
    });
    res.locals.html = await resp.text();
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

scraperController.findRelevant = (req, res, next) => {
  try {
    const dom = new JSDOM(res.locals.html);
    const document = dom.window.document;
    const items = document.querySelectorAll(
      'div.sg-col-20-of-24.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16'
    );

    res.locals.products = [];

    for (let i = 0; i < items.length; i++) {
      const itemSpecs = items[i].querySelectorAll(
        'div.sg-col.sg-col-0-of-12.sg-col-4-of-16.sg-col-2-of-20.sg-col-2-of-24.puis-padding-right-small'
      );

      const specs = {};

      for (let j = 0; j < itemSpecs.length; j++) {
        specs[
          itemSpecs[j].querySelector('span.a-color-secondary').textContent
        ] = itemSpecs[j].querySelector('span.a-text-bold').textContent;
      }

      const prime = items[i].querySelector('span.aok-relative.s-icon-text-medium.s-prime') ? true : false;
      // const deliverBy = items[i].querySelector('div.a-row').textContent ? items[i].querySelector('div.a-row').textContent : 'N/A';

      res.locals.products.push({
        title: items[i].querySelector(
          'span.a-size-medium.a-color-base.a-text-normal'
        ).textContent,
        rating: items[i].querySelector('span.a-icon-alt').textContent,
        price: items[i].querySelector('span.a-offscreen').textContent,
        prime: prime,
        // deliverBy: deliverBy,
        image: items[i].querySelector('img.s-image').src,
        specs: specs,
      });
    }

    return next();
  } catch (err) {
    return next({
      log: `Error in scraperController.findRelevant: ${err}`,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

module.exports = scraperController;

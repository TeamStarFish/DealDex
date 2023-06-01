const { JSDOM } = require('jsdom');

const scraperController = {};

scraperController.scrape = async (req, res, next) => {
  // URL to scrape
  const url = 'https://www.amazon.com/s?k=monitors&qid=1685563321&ref=sr_pg_1';
  // Header so robot detection doesnt affect us
  const header = new Headers({
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
  });

  try {
    // Fetch the data passing in the URL and the header
    const resp = await fetch(url, {
      headers: header,
    });
    // Save our text (HTML) data to locals
    res.locals.html = await resp.text();
    // Go to next middleware
    return next();

  } catch (err) {
    // If an error occurs send to our global error handler
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
    // Create a new dom element passing in the HTML we scraped to the imported JSDOM class
    const dom = new JSDOM(res.locals.html);
    // Point to the window document for ease of use
    const document = dom.window.document;
    // Grab the divs that contain the main items on the page soring them in an object where the keys are numbered from 0 on
    const items = document.querySelectorAll(
      'div.sg-col-20-of-24.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16'
    );

    // Assign an empty array to locals
    res.locals.products = [];

    // Loop through the items object
    for (let i = 0; i < items.length; i++) {
      // Find the div that contains the specs of the item and store in an object
      const itemSpecs = items[i].querySelectorAll(
        'div.sg-col.sg-col-0-of-12.sg-col-4-of-16.sg-col-2-of-20.sg-col-2-of-24.puis-padding-right-small'
      );

      // Create a temp specs object
      const specs = {};

      // Loop through the item specs object
      for (let j = 0; j < itemSpecs.length; j++) {
        // For each spec, assign the type and the value as key value pairs to our temp object
        specs[
          itemSpecs[j].querySelector('span.a-color-secondary').textContent
        ] = itemSpecs[j].querySelector('span.a-text-bold').textContent;
      }

      // Check if the item has the prim tag or not
      const prime = items[i].querySelector(
        'span.aok-relative.s-icon-text-medium.s-prime'
      )
        ? true
        : false;

      // Push an object containing all our information on a given product to the array we saved in locals
      res.locals.products.push({
        // Find the title of the item
        title: items[i].querySelector(
          'span.a-size-medium.a-color-base.a-text-normal'
        ).textContent,
        // Find link to item
        link:
          'https:www.amazon.com' +
          items[i]
            .querySelector(
              'a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal'
            )
            .href.toString(),
        // Find the rating of the item and convert it to a Number
        rating: Number(
          items[i].querySelector('span.a-icon-alt').textContent.slice(0, 3)
        ),
        // Find the price of the item and convert it to a Number
        price: Number(
          items[i].querySelector('span.a-offscreen').textContent.slice(1)
        ),
        // Assing our bool of if the item is prime eligable or not
        prime: prime,
        // Check if the item mentions it's delivery date, if it does, save it, if it doesnt, 'N/A'
        deliverBy: items[i].querySelector('span.a-color-base.a-text-bold')
          ? items[i].querySelector('span.a-color-base.a-text-bold').textContent
          : 'N/A',
        // Find the image of the item
        image: items[i].querySelector('img.s-image').src,
        // Assign our temp specs object
        specs: specs,
      });
    }

    // Go to next middleware
    return next();
  } catch (err) {
    // If an error occurs send to our global error handler
    return next({
      log: `Error in scraperController.findRelevant: ${err}`,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

module.exports = scraperController;

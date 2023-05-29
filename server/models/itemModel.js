const { Pool } = require('pg');

// import productData from '../computerMonitors';
const productData = require('./computerMonitors.js');

const PG_URI =
  'postgres://jfkrkohp:ApwfgUnUkSQOXTIN197AfmxQo_jKKAoZ@mahmud.db.elephantsql.com/jfkrkohp';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// const test = () => {
//   productData.category_results.map((item, index) => {
//     // INSERT INTO products VALUES  ('Computer Monitors', 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)', 99.97, 24, 1080, 75);
//     pool.query(
//       `INSERT INTO products VALUES ('Computer Monitors', ${item.title}, ${item.prices[0].value}, 24${index}, 1080${index}, 75${index});`
//     );
//   });
// };
// const test = () => {
//   productData.category_results.map((item, index) => {
//     // INSERT INTO products VALUES  ('Computer Monitors', 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)', 99.97, 24, 1080, 75);
//     pool.query(
//       `INSERT INTO products VALUES ('Computer Monitors', 'test', 5, 5, 5, 23)`
//     );
//   });
// };

// const test = () =>
//   pool.query(
//     `INSERT INTO products VALUES ('Computer Monitors', 'test', 5, 5, 5, 23)`
//   );

// test();

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text); //TODO: logs in the terminal an exorbitant time
    return pool.query(text, params, callback);
  },
};

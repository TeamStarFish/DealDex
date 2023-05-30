const { Pool } = require('pg');

// import productData from '../computerMonitors';
const productData = require('./computerMonitors.js');
const tvData = require('./televisions.js');

const PG_URI =
  'postgres://jfkrkohp:ApwfgUnUkSQOXTIN197AfmxQo_jKKAoZ@mahmud.db.elephantsql.com/jfkrkohp';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Upload Computer Monitors into SQL Database

// const uploadComputers = async () => {
//   for (let i = 0; i < productData.category_results.length; i++) {
//     if (productData.category_results[i].price === undefined) {
//       await pool.query(
//         `INSERT INTO products VALUES ('Computer Monitors', '${productData.category_results[i].title}', 10${i}, 24${i}, 720, 75, '${productData.category_results[i].image}')`
//       );
//     } else {
//       await pool.query(
//         `INSERT INTO products VALUES ('Computer Monitors', '${productData.category_results[i].title}', ${productData.category_results[i].prices[0].value}, 100${i}, 1080, 60, '${productData.category_results[i].image}')`
//       );
//     }
//     // pool.query(
//     //   `INSERT INTO products VALUES ('Computer Monitors', '${productData.category_results[i].title}' , 500000, 50000, 500000, 50000)`
//     // );
//   }
// };

// uploadComputers();

// Upload TV into SQL Database

const uploadTvs = async () => {
  for (let i = 0; i < tvData.category_results.length; i++) {
    if (tvData.category_results[i].price === undefined) {
      await pool.query(
        `INSERT INTO products VALUES ('TVs', '${tvData.category_results[i].title}', 10${i}, 50${i}, 720, 75, '${tvData.category_results[i].image}')`
      );
    } else {
      await pool.query(
        `INSERT INTO products VALUES ('TVs', '${tvData.category_results[i].title}', ${tvData.category_results[i].prices[0].value}, 30${i}, 1080, 60, '${tvData.category_results[i].image}')`
      );
    }
    // pool.query(
    //   `INSERT INTO products VALUES ('Computer Monitors', '${productData.category_results[i].title}' , 500000, 50000, 500000, 50000)`
    // );
  }
};

// uploadTvs();

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text); //TODO: logs in the terminal an exorbitant time
    return pool.query(text, params, callback);
  },
};

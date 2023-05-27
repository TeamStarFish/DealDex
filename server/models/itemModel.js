const { Pool } = require('pg');

const PG_URI =
  'postgres://jfkrkohp:ApwfgUnUkSQOXTIN197AfmxQo_jKKAoZ@mahmud.db.elephantsql.com/jfkrkohp';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text); //TODO: logs in the terminal an exorbitant time
    return pool.query(text, params, callback);
  },
};

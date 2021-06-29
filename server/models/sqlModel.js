const { Pool } = require('pg');

//connection string from elephantSQL
const PG_URI = 'postgres://tsaphdfl:rxt-lT1eyUXb22G10QfaK6AAFlzHEXKf@batyr.db.elephantsql.com/tsaphdfl';

//create a new pool here using the connection string above
const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
    },
};
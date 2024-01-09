const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5473,
  password: '$valdomeiro$',
  database: 'SP_db',
});

module.exports = { client };

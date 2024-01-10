const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
  ssl: true,
});

module.exports = { client };

/*const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5473,
  password: '$valdomeiro$',
  database: 'SP_db',
});*/

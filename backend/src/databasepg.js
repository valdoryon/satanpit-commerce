const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5473,
  password: '$valdomeiro$',
  database: 'SP_db',
});

// client.connect();

// client.query('SELECT * FROM "Clothes"', (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.error(err.message);
//   }
//   client.end();
// });

module.exports = { client };

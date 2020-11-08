const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'flow_quotes'
});

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '12345',
//   database: 'flow_quotes'
// });

module.exports = db;
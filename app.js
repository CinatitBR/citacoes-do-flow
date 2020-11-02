const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'njk');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// Connecting to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'flow_quotes'
});

app.get('/', (req, res) => {
  const sqlQuote = 'SELECT * FROM `quote`';
  let quotes;

  // Retrieve records from table "quote"
  connection.query(sqlQuote, (error, results) => {
    if (error) throw error;

    return res.render('index', { quotes: results });
  });

  return;
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
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

app.get('/', async (req, res) => {
  const sqlQuote = 'SELECT * FROM `quote`';

  let quotes;
  let photo_id;

  const promise = new Promise((resolve, reject) => {
    connection.query(sqlQuote, (error, results) => {
      if (error) reject(error);

      return resolve(results);
    });
  });

  await promise
    .then(value => {
      quotes = value;
      photo_id = quotes[0].photo_id;
    })
    .catch(error => {
      throw error;
    });
    
  console.log(photo_id);
  return res.send(quotes);
  
  // return res.render('index', { quotes });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
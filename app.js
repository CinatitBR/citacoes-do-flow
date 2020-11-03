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
  const getData = sql => {
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, results) => {
        if (error) reject(error);
  
        resolve(results);
      });
    }); 
  }

  // Retrieve records from "quote" table
  let quoteRecords;
  const sqlQuote = 'SELECT * FROM quote';
  
  await getData(sqlQuote)
    .then(value => quoteRecords = value)
    .catch(error => {
      throw error;
    });
  
  // Retrieve records from "photo" table
  let photo_id = quoteRecords[0].photo_id;
  let photoRecords;
  const sqlPhotos = `SELECT * FROM photo WHERE photo_id = ${photo_id}`;

  await getData(sqlPhotos)
    .then(value => photoRecords = value)
    .catch(error => {
      throw error;
    }); 
  
  return res.render('index', { photoRecords });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
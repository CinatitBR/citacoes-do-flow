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
  database: 'menagerie'
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM `pet`';

  connection.query(sql, (error, results) => {
    if (error) throw error;

    // res.send(results[0].name)
    return res.render('index', { results });
  });

  return;
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
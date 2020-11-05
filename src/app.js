const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');
// const mysql = require('mysql');

const app = express();

app.use(express.static('public')); 
app.set('view engine', 'njk');

nunjucks.configure('src/views', {
  autoescape: true,
  express: app
});

// Connecting to MySQL database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '12345',
//   database: 'flow_quotes'
// });

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
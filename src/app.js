const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();

// // Connect to MySQL
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '12345',
//   database: 'flow_quotes'
// });

// Set static directory
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'njk');
nunjucks.configure('src/views', {
  autoescape: true,
  express: app
});

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();

// Static directory
app.use(express.static('public'));

// Template engine
app.set('view engine', 'njk');
nunjucks.configure('src/views', {
  autoescape: true,
  express: app
});

// Use routes from routes file
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
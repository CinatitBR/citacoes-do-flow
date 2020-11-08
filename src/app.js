const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();

// Set static directory
app.use(express.static('public'));

// Set template engine
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
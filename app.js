const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'njk')

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  return res.render('index', { name: 'Casarão' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});
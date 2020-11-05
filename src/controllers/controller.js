const Quote = require('../model/Quote');

exports.renderIndexPage = async (req, res) => {
  const quote = new Quote();

  const quoteRecords = quote.getRecords();

  console.log(quoteRecords);

  res.render('index');
}
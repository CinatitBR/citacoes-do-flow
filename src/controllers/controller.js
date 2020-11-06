const Quote = require('../model/Quote');

exports.renderIndexPage = async (req, res) => {
  const quote = new Quote();

  quote.getRecords(records => {
    const quoteRecords = records;
    
    res.render('index', { quoteRecords });
  });
}
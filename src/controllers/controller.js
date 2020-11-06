const Quote = require('../model/Quote');

exports.renderIndexPage = async (req, res) => {
  Quote.getRecords(records => {
    const quoteRecords = records;
    
    return res.render('index', { quoteRecords });
  });
}
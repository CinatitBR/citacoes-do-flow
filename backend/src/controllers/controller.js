const Quote = require('../models/Quote');

exports.getQuotes = (req, res) => {
  const limit = 24;
  let offset = 0;

  const params = {limit, offset}

  Quote.getRecords(params, results => {
    const records = results;

    return res.json(records);
  });
}
const Quote = require('../model/Quote');


exports.renderIndexPage = (req, res) => {
  const limit = 24;
  let offset = 0;

  const params = {limit, offset}

  Quote.getRecords(params, results => {
    const records = results;

    offset += 24;
    
    return res.render('index', { records });
  });
}
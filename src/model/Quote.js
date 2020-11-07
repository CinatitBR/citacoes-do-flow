const db = require('../config/db');

const Quote = {}

Quote.getRecords = (params, callback) => {
  const { limit, offset } = params;

  let sql = `
    SELECT * FROM test
    LIMIT ${limit} OFFSET ${offset} 
  `;

  db.query(sql, (error, results) => {
    if (error) throw error;

    callback(results)
  });


  // let sql = '';

  // sql = `
  //   SELECT quote_text, episode, timestamp, 
  //   photo_filename, photo_ext,
  //   author
  //   FROM quote
  //   INNER JOIN photo
  //   ON quote.photo_id = photo.photo_id
  //   INNER JOIN author
  //   ON quote.author_id = author.author_id;
  // `;

  // db.query(sql, (error, results) => {
  //   if (error) `Erro no query: ${error}`;

  //   callback(results);
  // });
}

Quote.getCount = () => {
  let sql = ``;
}

module.exports = Quote;

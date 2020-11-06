const db = require('../config/db');

const Quote = {}

Quote.getRecords = callback => {
  let sql = '';

  sql = `
    SELECT quote_text, episode, timestamp, 
    photo_filename, photo_ext,
    author
    FROM quote
    INNER JOIN photo
    ON quote.photo_id = photo.photo_id
    INNER JOIN author
    ON quote.author_id = author.author_id;
  `;

  db.query(sql, (error, results) => {
    if (error) `Erro no query: ${error}`;

    callback(results);
  });
}

module.exports = Quote;

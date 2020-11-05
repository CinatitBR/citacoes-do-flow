const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'flow_quotes'
});

const Quote = function () {}

Quote.prototype.getRecords = async () => {
  let sql = `
    SELECT quote_text, episode, timestamp, photo_id, author_id 
    FROM quote;
  `;

  let promise = new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) reject(error);
  
      resolve(results);
    });
  });

  promise
    .then(results => {
      const { quote_text, episode, timestamp, photo_id, author_id } = results;
      return { quote_text, episode, timestamp, photo_id, author_id };
    })
    .catch(error => {
      throw error;
    });
}

module.exports = Quote;

// Preciso pegar o "filename" e o "extension" da tabela photo

// Connecting to MySQL database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '12345',
//   database: 'flow_quotes'
// });

// const getData = sql => {
//   return new Promise((resolve, reject) => {
//     connection.query(sql, (error, results) => {
//       if (error) reject(error);

//       resolve(results);
//     });
//   }); 
// }

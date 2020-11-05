const express = require('express');
const controller = require('./controllers/controller');

const router = express.Router();

router.get('/', controller.renderIndexPage);

module.exports = router;

// const getData = sql => {
  //   return new Promise((resolve, reject) => {
  //     connection.query(sql, (error, results) => {
  //       if (error) reject(error);
  
  //       resolve(results);
  //     });
  //   }); 
  // }

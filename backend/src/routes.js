const express = require('express');
const controller = require('./controllers/controller');

const router = express.Router();

router.get('/getQuotes', controller.getQuotes);

module.exports = router;

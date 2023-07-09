var express = require('express');
var router = express.Router();
const countries = require('../controllers/countries');

// http://localhost:8080/countries
router.get('/', countries.getAll);

module.exports = router;
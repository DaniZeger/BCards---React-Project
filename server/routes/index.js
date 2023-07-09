var express = require('express');
var router = express.Router();
var init = require('../controllers/index')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//TODO Init first data to mongoose
router.put('/init', init.init)

module.exports = router;

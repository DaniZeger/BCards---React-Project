var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

// http://localhost:8080/users/signup
router.post('/signup', users.signUp);

// http://localhost:8080/users/login
router.post('/login', users.login);

module.exports = router;

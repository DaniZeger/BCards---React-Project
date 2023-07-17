var express = require('express');
var router = express.Router();
const users = require('../controllers/users');


// http://localhost:8080/users
router.get('/', users.getAll);

// http://localhost:8080/users/signup
router.post('/signup', users.signUp);

// http://localhost:8080/users/login
router.post('/login', users.login);

// http://localhost:8080/users/id
router.get('/:id', users.getOneUser);
router.delete('/:id', users.deleteUser);
router.put('/:id', users.editUser);

// http://localhost:8080/users/update-image/id
router.put('/update-image/:id', users.editImage);

module.exports = router;

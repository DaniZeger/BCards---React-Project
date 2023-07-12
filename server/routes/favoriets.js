var express = require('express');
var router = express.Router();
const favorites = require('../controllers/favoriets')

// http://localhost:8080/favorites
router.post('/', favorites.saveFav)
router.delete('/', favorites.deleteFav)

// http://localhost:8080/favorites/:userId
router.get('/:userId', favorites.getUserFav)


module.exports = router;
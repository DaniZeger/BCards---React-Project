var express = require('express');
var router = express.Router();
const cards = require('../controllers/cards');

// http://localhost:8080/cards
router.get('/', cards.getAll);
router.post('/', cards.addCard)

// http://localhost:8080/cards/user-cards/userId
router.get('/user-cards/:userId', cards.getUserCards);

// http://localhost:8080/cards/id
router.delete('/:id', cards.deleteCard)
router.get('/:id', cards.getOneItem);
router.put('/:id', cards.editCard)



module.exports = router;
const mongoose = require('mongoose')

const FavSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        require: true
    },
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CardModel',
        require: true
    }
})

const FavModel = mongoose.model('FavModel', FavSchema, 'favorites')

module.exports = FavModel
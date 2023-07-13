const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 256,
    },
    subtitle: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 256,
    },
    description: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 1500,
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 256,
        unique: true,
    },
    website: {
        type: String,
    },
    imageUrl: {
        type: String,
        default: 'https://www.itarian.com/assets-new/images/business-management.png'
    },

    imageAlt: {
        type: String,
        default: 'Place holder image'
    },
    state: {
        type: String,
        default: null
    },
    country: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    houseNumber: {
        type: String,
        require: true
    },
    zipCode: {
        type: String,
        require: true,
        default: null
    },
    userId: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
});

const CardModel = mongoose.model('CardModel', cardSchema, 'cards');

module.exports = CardModel
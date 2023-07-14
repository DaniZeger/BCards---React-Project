const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 256,
    },
    middleName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 256,
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
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
    },
    imageUrl: {
        type: String,
    },

    imageAlt: {
        type: String,
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
        type: Number,
        require: true
    },
    zipCode: {
        type: Number,
        require: true,
        default: null
    },
    userType: {
        type: Number,
        default: 3
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const UserModel = mongoose.model('UserModel', userSchema, 'users');

module.exports = UserModel
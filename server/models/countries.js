const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    currency: {
        type: String,
        default: ''
    },
    phone: {
        type: Number,
        default: 0
    },
    capital: {
        type: String,
        default: ''
    },
    code: {
        type: String,
        default: ''
    },
    code3: {
        type: String,
        default: ''
    },
    number: {
        type: Number,
        default: 0
    }
})

const CountriesModel = mongoose.model('CountryModel', CountrySchema, 'countries')

module.exports = CountriesModel
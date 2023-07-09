const CountryModel = require('../models/countries')
const countriesList = require('../data/countriesList.js')
const UserModel = require('../models/users');
const usersList = require('../data/usersList.js')
const CardModel = require('../models/cards');
const cardsList = require('../data/cardsList')


module.exports = {
    init: async function (req, res, next) {

        await CountryModel.collection.drop();
        await UserModel.collection.drop();
        await CardModel.collection.drop();

        try {
            const countries = countriesList
            const users = usersList
            const cards = cardsList

            await CountryModel.insertMany(countries)
            await UserModel.insertMany(users)
            await CardModel.insertMany(cards)
            res.json('Data uploaded successfully');
        } catch (err) {
            console.error(err);
            res.json('Failed to load data');
        }
    },

}
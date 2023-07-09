const CountryModel = require('../models/countries')

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await CountryModel.find({}).sort({ 'name': 1 })
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting vacations' });
        }
    },

}
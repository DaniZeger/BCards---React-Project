const FavModel = require('../models/favoriets')
const joi = require('joi')
const CardModel = require('../models/cards')

module.exports = {
    saveFav: async function (req, res, next) {
        try {
            const schema = joi.object({
                userId: joi.string().required(),
                cardId: joi.string().required()
            })

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const addFav = new FavModel({
                userId: value.userId,
                cardId: value.cardId
            })

            const result = await addFav.save()
            res.json({
                ...value,
                _id: result._id
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error save card" });
        }
    },

    deleteFav: async function (req, res, next) {
        try {
            const schema = joi.object({
                userId: joi.string().required(),
                cardId: joi.string().required()
            })

            const { error, value } = schema.validate(req.body);
            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            await FavModel.findOneAndDelete({ userId: value.userId, cardId: value.cardId }).exec()

            res.json('Card removed from favorites')

        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error save card" });
        }
    },

    getUserFav: async function (req, res, next) {
        try {
            const scheme = joi.object({
                userId: joi.string().required(),
            });

            const { error, value } = scheme.validate({ userId: req.params.userId });
            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const favorites = await FavModel.find({ userId: value.userId }).populate({
                path: 'cardId',
                model: 'CardModel',
                select: '_id title subtitle description phone email website imageUrl imageAlt state country city street houseNumber zipCode userId created_at'
            });

            res.json(favorites);

        } catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting cards' });
        }
    }
}





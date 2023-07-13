const CardModel = require('../models/cards')
const joi = require('joi')


module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await CardModel.find({})
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting cards' });
        }
    },

    getUserCards: async function (req, res, next) {
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
            const result = await CardModel.find({ userId: value.userId })
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting cards' });
        }
    },

    getOneItem: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const result = await CardModel.findOne({ _id: value._id });
            res.json(result);

        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error get the card" });
        }
    },

    addCard: async function (req, res, next) {
        try {

            const schema = joi.object({
                title: joi.string().required().min(2),
                subtitle: joi.string().required().min(2),
                description: joi.string().required().min(2),
                phone: joi.string().required(),
                email: joi.string().email().required(),
                website: joi.string().allow(null, ''),
                imageUrl: joi.string().allow(null, ''),
                imageAlt: joi.string().allow(null, ''),
                state: joi.string().allow(null, ''),
                country: joi.string().min(2),
                city: joi.string().required().min(2),
                street: joi.string().required().min(2),
                houseNumber: joi.string().required(),
                zipCode: joi.string(),
                userId: joi.string().required(),

            })

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }


            const newCard = new CardModel({
                title: value.title,
                subtitle: value.subtitle,
                description: value.description,
                phone: value.phone,
                email: value.email,
                website: value.website,
                imageUrl: value.imageUrl,
                imageAlt: value.imageAl,
                state: value.state,
                country: value.country,
                city: value.city,
                street: value.street,
                houseNumber: value.houseNumber,
                zipCode: value.zipCode,
                userId: value.userId,
            })
            const result = await newCard.save()
            res.json({
                ...value,
                _id: result._id
            });
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error add card" });
        }
    },

    editCard: async function (req, res, next) {
        try {

            const schema = joi.object({
                title: joi.string().required().min(2),
                subtitle: joi.string().required().min(2),
                description: joi.string().required().min(2),
                phone: joi.string().required(),
                email: joi.string().email().required(),
                website: joi.string().allow(null, ''),
                imageUrl: joi.string().allow(null, ''),
                imageAlt: joi.string().allow(null, ''),
                state: joi.string().allow(null, ''),
                country: joi.string().min(2),
                city: joi.string().required().min(2),
                street: joi.string().required().min(2),
                houseNumber: joi.string().required(),
                zipCode: joi.number().required(),
                userId: joi.string().required(),
            })

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const card = await CardModel.findOneAndUpdate({
                _id: req.params.id
            }, value)

            if (!card) return res.status(404).send('Given ID was not found.');

            const updated = await CardModel.findOne({ _id: req.params.id });
            res.json(updated);

        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error add card" });
        }
    },

    deleteCard: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const deleted = await CardModel.findOne({ _id: value._id });

            await CardModel.deleteOne(value).exec();
            res.json(deleted);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete card" });
        }
    },

}
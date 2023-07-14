const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/users');
const joi = require('joi');
const config = require('../config/dev')

module.exports = {

    login: async function (req, res, next) {

        const schema = joi.object({
            email: joi.string().required().min(6).max(256).email(),
            password: joi.string().required().min(6).max(1024),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(401).send('User does not exist');
            return;
        }

        try {
            const user = await UserModel.findOne({ email: value.email });
            if (!user) throw Error;
            const validPassword = await bcrypt.compare(value.password, user.password);
            if (!validPassword) throw 'Invalid password';

            const param = { email: value.email };
            const token = jwt.sign(param, config.jwt_token, { expiresIn: '72800s' });

            res.json({
                token: token,
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                userType: user.userType,
                imageUrl: user.imageUrl,
                imageAlt: user.imageAlt
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).send('Invalid data.');
        }
    },

    signUp: async function (req, res, next) {
        const schema = joi.object({
            firstName: joi.string().required().min(2),
            middleName: joi.string().allow(null, ''),
            lastName: joi.string().required().min(2),
            phone: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().min(6).max(15).required(),
            imageUrl: joi.string().allow(null, ''),
            imageAlt: joi.string().allow(null, ''),
            state: joi.string().allow(null, ''),
            country: joi.string().min(2),
            city: joi.string().required().min(2),
            street: joi.string().required().min(2),
            houseNumber: joi.number().required(),
            zipCode: joi.number().required(),
            userType: joi.number().allow(null, ''),
        })

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(400).json({ error: 'error sign up new user' });
            return;
        }

        try {
            const user = await UserModel.findOne({ email: value.email });
            if (user) {
                return res.status(400).json({ error: "User already registered." });
            }

            const hash = await bcrypt.hash(value.password, 10);

            const newUser = new UserModel({
                firstName: value.firstName,
                middleName: value.middleName,
                lastName: value.lastName,
                phone: value.phone,
                email: value.email,
                password: hash,
                imageUrl: value.imageUrl,
                imageAlt: value.imageAlt,
                state: value.state,
                country: value.country,
                city: value.city,
                street: value.street,
                houseNumber: value.houseNumber,
                zipCode: value.zipCode,
                userType: value.userType,
            })

            await newUser.save();
            res.json(newUser)
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },

    getOneUser: async function (req, res, next) {
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

            const result = await UserModel.findOne({ _id: value._id });
            res.json(result);

        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error get the user" });
        }
    },

    deleteUser: async function (req, res, next) {
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

            const deleted = await UserModel.findOne({ _id: value._id });

            await UserModel.deleteOne(value).exec();
            res.json(deleted);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete card" });
        }
    },

    editUser: async function (req, res, next) {
        try {
            const scheme = joi.object({
                firstName: joi.string().required().min(2),
                middleName: joi.string().allow(null, ''),
                lastName: joi.string().required().min(2),
                phone: joi.string().required(),
                email: joi.string().email().required(),
                state: joi.string().allow(null, ''),
                country: joi.string().min(2),
                city: joi.string().required().min(2),
                street: joi.string().required().min(2),
                houseNumber: joi.number().required(),
                zipCode: joi.number().required(),
            })

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const user = await UserModel.findOneAndUpdate({
                _id: req.params.id
            }, value)

            if (!user) return res.status(404).send('Given ID was not found.');

            const updated = await UserModel.findOne({ _id: req.params.id });
            res.json(updated);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete card" });
        }
    },

    editImage: async function (req, res, next) {
        try {
            const scheme = joi.object({
                imageUrl: joi.string(),
                imageAlt: joi.string(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const user = await UserModel.findOneAndUpdate({
                _id: req.params.id
            }, value)

            if (!user) return res.status(404).send('Given ID was not found.');

            const updated = await UserModel.findOne({ _id: req.params.id });
            res.json(updated);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete card" });
        }
    },





}
const model = require("../models/index");

exports.index = async (req, res, next) => {
    // console.log('req.body ',req.body.firstName);
    if (req.body.fullName !== null && req.body.username
        && req.body.password !== null && req.body.email !== null) {
        try {
            await model.User.create({
                fullName: req.body.fullName,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }).then(() => {
                return res.status(201).send('Create successfully');
            })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    } else {
        return res.status(400).send('Error data is null');
    }

};
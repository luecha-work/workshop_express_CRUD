const model = require("../models/index");

exports.index = async (req, res, next) => {
    console.log('req.body ',req.body.firstName);
    if (req.body.firstName !== null && req.body.lastName
        && req.body.Age !== null && req.body.email !== null) {
        try {
            await model.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                Age: req.body.Age,
                email: req.body.email
            }).then(() => {
                return res.status(200).send('Create successfully');
            })
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        return res.status(500).send('Data User is Null');
    }

};
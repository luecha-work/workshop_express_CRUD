const model = require("../models/index");

exports.index = async (req, res, next) => {
    try {
        const users = await model.User.findAll();

        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
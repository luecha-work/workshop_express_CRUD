const model = require("../models/index");

exports.index = async (req, res, next) => {
    const users = await model.User.findAll();

    res.status(200).json({
        data: users,
    });
};
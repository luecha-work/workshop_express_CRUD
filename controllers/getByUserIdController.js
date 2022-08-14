const model = require("../models/index");

exports.index = async (req, res, next) => {
    try {
        const { id } = req.params;
        const users = await model.User.findOne({
            where: { id: id }
        });
        if (users) {
            return res.status(200).json({ users });
        }
        return res.status(500).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
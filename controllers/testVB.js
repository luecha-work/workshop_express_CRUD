const model = require("../models/index");

exports.index = async (req, res, next) => {
    // console.log("req.body is ",req.body);
    console.log(req.params.id);
    // console.log(req.query.attributes);

    try {
        return res.status(200).send(true);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
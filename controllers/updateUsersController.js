const model = require("../models/index");

exports.index = async (req, res, next) => {
    try {
        let firstName = req.query.key;

        await model.User.update({
            lastName: req.body.lastName,
            Age: req.body.Age
        },
            { where: { firstName: firstName }, })
            .then(await function (rowUpdate) { // rowDeleted will return number of rows deleted
                console.log('rowUpdate ', rowUpdate);
                if (rowUpdate < 1) {
                    return res.status(401).send('Can not find this information');

                } else {
                    return res.status(200).send('Update successfully');
                }
            });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
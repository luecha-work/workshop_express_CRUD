const model = require("../models/index");

exports.index = async (req, res, next) => {
    let username = req.query.key;
    try {
        await model.User.destroy({
            where: { username: username }
        }).then(await function (rowDeleted) { // rowDeleted will return number of rows deleted
            console.log('rowDeleted ', rowDeleted);
            if (rowDeleted < 1) {
                return res.status(401).send('Can not find this information');

            } else {
                return res.status(200).send('Deleted successfully');
            }
        });
    } catch (error) {
        return res.status(400).send('Deleted fail');
    }
};
const express = require('express');
const router = express.Router();
const getAllUserController = require("../controllers/getAllUserController");
const getByUserIdController = require("../controllers/getByUserIdController");
const createUsersController = require("../controllers/createUsersController");
const updateUsersController = require("../controllers/updateUsersController");
const deleteUsersController = require("../controllers/deleteUsersController");



/* GET users listing. */
router.get('/', getAllUserController.index);

router.get('/:id', getByUserIdController.index);

router.post('/create', createUsersController.index);

router.post('/update', updateUsersController.index);

router.delete('/delete', deleteUsersController.index);

module.exports = router;
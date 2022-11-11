const express = require('express');
const router = express.Router();
const getAllUserController = require("../controllers/getAllUserController");
const getByUserIdController = require("../controllers/getByUserIdController");
const createUsersController = require("../controllers/createUsersController");
const updateUsersController = require("../controllers/updateUsersController");
const deleteUsersController = require("../controllers/deleteUsersController");
const vbTestAPI = require("../controllers/testVB");



/* GET users listing. */
router.get('/', getAllUserController.index);

router.get('/:id/add_sensor', getByUserIdController.index);

router.post('/create', createUsersController.index);

router.post('/update', updateUsersController.index);

router.delete('/delete', deleteUsersController.index);

/* Test VB.Net Using API */
router.post('/vbapi/:id', vbTestAPI.index);

module.exports = router;
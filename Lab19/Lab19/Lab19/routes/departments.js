const express = require('express');
const departmentsController = require("../controllers/departments");
const router = express.Router();

//router.get('/:id', departmentsController.get);
router.get('/', departmentsController.getAll);
router.post('/', departmentsController.create);
router.put('/:id', departmentsController.update);
router.delete('/:id', departmentsController.delete);
module.exports = router;
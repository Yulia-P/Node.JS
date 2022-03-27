const express = require('express');
const specialtyController = require("../controllers/specialty");
const router = express.Router();

//router.get('/:id', specialtyController.get);
router.get('/', specialtyController.getAll);
router.post('/', specialtyController.create);
router.put('/:id', specialtyController.update);
router.delete('/:id', specialtyController.delete);
module.exports = router;
const express = require('express');
const officialinfController = require("../controllers/officialinf");
const router = express.Router();

//router.get('/:id', officialinfController.get);
router.get('/', officialinfController.getAll);
router.post('/', officialinfController.create);
router.put('/:id', officialinfController.update);
router.delete('/:id', officialinfController.delete);
module.exports = router;
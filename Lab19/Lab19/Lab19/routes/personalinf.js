const express = require('express');
const personalinfController = require("../controllers/personalinf");
const router = express.Router();

//router.get('/:id', personalinfController.get);
router.get('/', personalinfController.getAll);
router.post('/', personalinfController.create);
router.put('/:id', personalinfController.update);
router.delete('/:id', personalinfController.delete);
module.exports = router;
var express = require('express');
var router = express.Router();
var productController = require('./productController.js');

router.post('/', productController.create);

router.put('/:id', productController.update);

router.delete('/:id', productController.remove);

module.exports = router;

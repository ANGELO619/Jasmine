const express = require('express');
const ProductController = require('./productController');
const router = express.Router();
const admin = require("firebase-admin");
const ProductConstant = require('./productConstant');
const ProductRepository = require('./productRepository');
const ProductInputValidator = require('./productInputValidator');

const productCollection = admin.firestore().collection(ProductConstant.PRODUCT_COLLECTION)
const productRepository = new ProductRepository(productCollection)
const productController = new ProductController(productRepository, productInputValidator)

const productInputValidator = new ProductInputValidator()

router.post('/', productInputValidator.validateCreateProductInput, productController.create);

router.put('/:id', productInputValidator.validateUpdateProductInput, productController.update);

router.delete('/:id', productInputValidator.validateRemoveProductInput, productController.remove);

module.exports = router;

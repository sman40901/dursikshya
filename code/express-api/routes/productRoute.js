const express = require('express');
const { postProduct, getProductList, getProductById, updateProductById, deleteProductById } = require('../controllers/productController');
const router = express.Router();
const upload = require('../middleware/file-upload');
const { productValidation, validation } = require('../validation/validator');

router.post('/postproduct', upload.single('product_image'), productValidation, validation, postProduct);
router.get('/productlist', getProductList);
router.get('/productdetails', getProductById);
router.put('/updateproduct/:id', upload.single('product_image'), productValidation, validation, updateProductById);
router.delete('/deleteproduct/:id', deleteProductById);

module.exports = router // exporting using default method
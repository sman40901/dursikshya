const express = require('express');
const { productPost, productList, productId, productUpdate, productDelete } = require('../controllers/productControllers');
const upload = require('../middleware/file-upload');
const { productValidation, validation } = require('../validation/validator');
const router = express.Router();

// router.post("/productpost", productPost)
router.post("/productpost", upload.single('product_image'), productValidation, validation, productPost);
router.get('/productlist/:order', productList);
router.get('/productdetails/:id', productId);
router.put('/productupdate/:id', productUpdate);
router.put('/productdelete/:id', productDelete);

module.exports = router
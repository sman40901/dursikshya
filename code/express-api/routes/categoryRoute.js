const express = require('express');
const { testFunction, postCategory, getCategoryList, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/categoryController');
const router = express.Router();
const {categoryValidation, validation} = require('../validation/validator')

router.get('/test', testFunction);
router.post('/postcategory', categoryValidation, validation, postCategory);
router.get('/categorylist', getCategoryList);
router.get('/categorydetails/:id', getCategoryById);
router.put('/updatecategory/:id', updateCategoryById);
router.delete('/deletecategory/:id', deleteCategoryById);

module.exports = router // exporting using default method

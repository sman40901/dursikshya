const express = require('express');
const { testFunction, postCategory, getCategoryList, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/categoryController');
const router = express.Router();

router.get('/test', testFunction);
router.post('/postcategory', postCategory);
router.get('/categorylist', getCategoryList);
router.get('/categorydetails/:id', getCategoryById);
router.put('/updatecategory/:id', updateCategoryById);
router.delete('/deletecategory/:id', deleteCategoryById);

module.exports = router // exporting using default method

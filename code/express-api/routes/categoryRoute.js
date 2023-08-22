const express = require('express');
const { postCategory, getCategoryList, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/categoryController');
const router = express.Router();
const {categoryValidation, validation} = require('../validation/validator');
const { requireAdmin } = require('../controllers/userController');

// router.get('/test', testFunction);
router.post('/postcategory', requireAdmin, categoryValidation, validation, postCategory);
router.get('/categorylist', getCategoryList);
router.get('/categorydetails/:id', getCategoryById);
router.put('/updatecategory/:id', requireAdmin, updateCategoryById);
router.delete('/deletecategory/:id', requireAdmin, deleteCategoryById);

module.exports = router // exporting using default method

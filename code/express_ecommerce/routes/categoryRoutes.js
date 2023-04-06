const express = require('express');
const { testFunction, postCategory, categoryList, categoryDetails, categoryUpdate, categoryDelete } = require('../controllers/categoryControllers');
const { categoryValidation, validation } = require('../validation/validator');
const { requireSignin } = require('../controllers/userController');
const router = express.Router();


router.get('/demo', testFunction); //since function is getting called we dont need paranthesis
router.post('/postcategory', requireSignin, categoryValidation, validation, postCategory);
router.get('/categorylist', categoryList);
router.get('/categorydetails/:id', categoryDetails);
router.put('/categoryupdate/:id', requireSignin, categoryUpdate);
router.delete('/categorydelete/:id', requireSignin, categoryDelete);

module.exports = router
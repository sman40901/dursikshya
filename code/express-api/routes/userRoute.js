const express = require('express');
const router = express.Router();
const upload = require('../middleware/file-upload');
const { productValidation, validation } = require('../validation/validator');
const { postRegister, getUserList, postEmailConfirmation, signIn, forgetPassword, resetPassword, userDetails } = require('../controllers/userController');

router.post('/register', postRegister);
router.get('/userlist', getUserList);
router.put('/confirmation/:token', postEmailConfirmation);
router.post('/signin', signIn);
router.post('/forgetpassword', forgetPassword);
router.put('/resetpassword/:token', resetPassword);
router.get('/userdetails/:id', userDetails);

module.exports = router
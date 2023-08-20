const express = require('express');
const router = express.Router();
const upload = require('../middleware/file-upload');
const { productValidation, validation } = require('../validation/validator');
const { postRegister, getUserList, postEmailConfirmation, signIn } = require('../controllers/userController');

router.post('/register', postRegister);
router.get('/userlist', getUserList);
router.put('/confirmation/:token', postEmailConfirmation);
router.post('/signin', signIn);

module.exports = router
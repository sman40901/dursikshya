const express = require('express');
const router = express.Router();
const upload = require('../middleware/file-upload');
const { productValidation, validation } = require('../validation/validator');
const { postRegister, getUserList } = require('../controllers/userController');

router.post('/register', postRegister);
router.post('/userlist', getUserList);

module.exports = router
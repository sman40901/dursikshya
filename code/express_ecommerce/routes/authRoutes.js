const express = require('express');
const router = express.Router();

const { userPost, userList, postEmailConfirmation, signIn } = require('../controllers/userController');

router.post('/userpost', userPost);
router.get('/userlist', userList);
router.post('/confirmation/:token', postEmailConfirmation);
router.post('/signin', signIn);

module.exports = router;
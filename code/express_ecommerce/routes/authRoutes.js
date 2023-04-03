const express = require('express');
const router = express.Router();

const { userPost, userList } = require('../controllers/userController');

router.post('/userpost', userPost);
router.get('/userlist', userList);

module.exports = router;
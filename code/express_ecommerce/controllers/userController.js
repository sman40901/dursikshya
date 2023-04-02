const User = require('../models/authModel');

exports.userPost = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
       
    })
    user = await user.save();
    if (!user) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(user);
}

exports.userList = async (req, res) => {
    const user = await User.find();
    if (!user) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(user);
}
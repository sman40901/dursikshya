const User = require('../models/userModel');

//to register user
exports.postRegister = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user = await user.save();
    if (!user) {
        return res.status(500).json({ error: 'user creation failuer' });
    }
    res.send(user);
}

// to show the list of categories
exports.getUserList = async (req, res) => {
    const user = await User.find();
    if (!user) {
        return res.status(500).json({ error: 'could not retrive data' });
    }
    res.send(user);
}
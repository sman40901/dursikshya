const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const crypto = require('crypto');
const sendEmail = require('../utils/set-email');
const jwt = require('jsonwebtoken');
var { expressjwt } = require("express-jwt");

//to register user
exports.postRegister = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    // check for unique user / email
    User.findOne({ email: user.email })
        .then(async data => {
            if (data) {
                return res.status(400).json({ error: "this user already exists" })
            } else {
                user = await user.save();
                if (!user) {
                    return res.status(500).json({ error: 'user creation failed' });
                }

                // save token in the token model
                let token = new Token({
                    token: crypto.randomBytes(16).toString('hex'),
                    userId: user._id
                });
                token = await token.save();
                if (!token) {
                    return res.status(500).json({ error: 'failed to create token' })
                }

                const url=process.env.FRONTEND_URL+'\/email\/confirmation\/'+token.token;
                // send email process
                sendEmail({
                    from: 'no-reply@ecommerce.com',
                    to: user.email,
                    subject: 'email verification link',
                    text: `Hello,\n\n
                    Please verify your email by clicking the link below:\n\n
                    http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}
                    `,
                    html:`
                    <h1>Verify your email>/h1>
                    <a href='${url}'> click to verify</a>
                    `
                    //http://localhost:5000/api/confirmation/454ABCDEF
                })
                res.send(user);
            }
        }).catch(err => {
            return res.status(400).json({ error: err });
        })

}

// to show the list of categories
exports.getUserList = async (req, res) => {
    const user = await User.find()
        .select('-hashed_password') // dont show hashed_password field
        .select('-salt'); // dont show salt field
    if (!user) {
        return res.status(500).json({ error: 'could not retrive data' });
    }
    res.send(user);
}

// confirming the email
exports.postEmailConfirmation = (req, res) => {
    // search for the token
    Token.findOne({ token: req.params.token })
        .then(token => {
            if (!token) {
                return res.status(400).json({ error: 'invalid token or token may have expired' });
            }
            User.findOne({ _id: token.userId })
                .then(user => { // use .then when using promise
                    if (!user) {
                        return res.status(400).json({ error: 'unable to find valid token' })
                    }
                    // check if user is already verified or not
                    if (user.isVerified) {
                        return res.status(400).json({ error: 'email is already verified, login to continue' })
                    }
                    // save the verified user
                    user.isVerified = true;
                    user.save()
                        .then(user => {
                            if (!user) {
                                return res.status(400).json({ error: 'failed to verify your email' })
                            }
                            res.json({ message: 'congratulations, your email is verified' })
                        }).catch(err => {
                            return res.status(400).json({ error: err })
                        })
                }).catch(err => {
                    return res.status(400).json({ error: err })
                })
        })
        .catch(err => {
            return res.status(400).json({ error: err })
        })
}

//signin process
exports.signIn = async (req, res) => {
    const { email, password } = req.body; // destructing variables from request body
    // at first check email is registered in database or not
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(403).json({ error: 'the email provided is not found, please register first' });
    }
    // if email is found then check the password
    if (!user.authenticate(password)) {
        return res.status(400).json({ error: 'email or password does not match' });
    }

    //check if user is verified or not
    if (!user.isVerified) {
        return res.status(400).json({ error: 'verify your email first to continue' });
    }
    // res.send(user);

    // now generate token with user id, role and jwt secret
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    // store this token in a cookie
    res.cookie('myCookie', token, { expire: Date.now() + 99999 });

    // return user information to front end
    const { _id, name, role } = user;
    return res.json({ token, user: { name, email, role, _id } });
}

//forgot password
exports.forgetPassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) { // use this pattern when using await
        return res.status(403).json({ error: 'the email you provided does not exist' });
    }
    // save token in the token model
    let token = new Token({
        token: crypto.randomBytes(16).toString('hex'),
        userId: user._id
    });
    token = await token.save();
    if (!token) {
        return res.status(500).json({ error: 'failed to create token' })
    }

    // send email process
    sendEmail({
        from: 'no-reply@ecommerce.com',
        to: user.email,
        subject: 'email verification link',
        text: `Hello,\n\n
    Please reset your password by clicking the link below:\n\n
    http:\/\/${req.headers.host}\/api\/resetpassword\/${token.token}
    `
        //http://localhost:5000/api/resetpassword/454ABCDEF
    })
    res.json({ message: 'password reset link was sent to your email ' + req.body.email })
}

//forgot password
exports.resetPassword = async (req, res) => {
    // find the valid or matching token
    let token = await Token.findOne({ token: req.params.token });
    if (!token) {
        return res.status(400).json({ error: 'invalid or expired token' });
    }

    // if token found then the valid user  for this token
    let user = await User.findOne({ _id: token.userId });
    if (!user) {
        return res.status(400).json({ error: 'failed to find valid user' });
    }
    user.password = req.body.password;
    user = await user.save();

    if (!user) {
        return res.status(500).json({ error: 'failed to reset password' });
    }

    res.json({ message: 'password has been reset' })
}

// get user details
exports.userDetails = async (req, res) => {
    const user = await User.findById(req.params.id)
        .select('-hashed_password') // dont show hashed_password field
        .select('-salt'); // dont show salt fields
    if (!user) {
        return res.status(400).json({ error: 'no data found' })
    }
    res.send(user);
}

// require signin
exports.requireSignIn = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});


// admin middleware
exports.requireAdmin = (req, res, next) => {
    expressjwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
        userProperty: 'auth'
    })(req, res, (err) => {
        if (err) {
            return res.status(401).json({ error: 'unauthorized access detected' })
            // 401 is unauthorized
        }
        if (req.auth.role === 1) {
            next();
        }
        else {
            return res.status(403).json({ error: 'you are not authorized to access to this page' })
        }
    });
}

// user middleware
exports.requireUser = (req, res, next) => {
    expressjwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
        userProperty: 'auth'
    })(req, res, (err) => { // this is expressJWT function body
        if (err) {
            return res.status(401).json({ error: 'unauthorized access detected' })
            // 401 is unauthorized
        }
        if (req.auth.role === 0) {
            next();
        }
        else {
            return res.status(403).json({ error: 'you are not authorized to access to this page' })
        }
    });
}

exports.signOut = (req, res) => {
    res.clearCookie('myCookie');
    res.json({ message: 'signout success' });
}
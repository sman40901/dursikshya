const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');
const { builtinModules } = require('module');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    role: {
        type: Number,
        default: 0,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    isVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

//virtual fields to store password
userSchema.virtual('password')
    .set(function (password) { // mutator
        this._password = password; // _password is a virtual field, stores only for a certain while
        this.salt = uuidv1(); // creates unique UUID
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () { // accessor
        return this.hashed_password;
    })

// defining methods
userSchema.methods = {
    encryptPassword: function (password) {
        if (!password) {
            return '';
        }
        try {
            return crypto.Hmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
}

module.exports = mongoose.model('User', userSchema)
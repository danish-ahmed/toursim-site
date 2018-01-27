'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator2 = require('validator');

var _validator3 = _interopRequireDefault(_validator2);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username is required'],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
        trim: true,
        lowercase: true,
        validate: {
            validator: function validator(email) {
                return _validator3.default.isEmail(email);
            },

            message: '{VALUE} is not a valid email'
        }
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        trim: true
    }
});
userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }
    return next();
});

userSchema.methods = {
    authenticatePassword: function authenticatePassword(password) {
        return (0, _bcryptNodejs.compareSync)(password, this.password);
    },
    _hashPassword: function _hashPassword(password) {
        return (0, _bcryptNodejs.hashSync)(password);
    }
};

exports.default = _mongoose2.default.model('User', userSchema);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = {
    findUser: function findUser(req, res) {
        var credentials = req.body.credentials;
        // res.json({errors: {global:"Cannot find"}})

        _user2.default.findOne({ email: credentials.email }).then(function (user) {
            if (user && user.authenticatePassword(credentials.password)) {
                res.status(201).json({ user: { email: user.email } });
            } else {
                res.status(400).json({ errors: { global: 'Invalid Credentials' } });
            }
        }).catch(function (err) {
            return res.status(400).json({ errors: { global: 'Cannot connect to database' } });
        });
    },
    createUser: function createUser(req, res) {
        _user2.default.create(req.body.data).then(function (user) {
            return res.status(200).json({ user: user });
        }).catch(function (err) {
            return res.status(400).json({ errors: { global: 'Data did not saved in DB' + err } });
        });
    }
};
exports.default = userController;
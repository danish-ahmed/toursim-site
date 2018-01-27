'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user.controllers');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = _express2.default.Router();

Route.post('/login', _user2.default.findUser);
Route.post('/signup', _user2.default.createUser);

module.exports = Route;
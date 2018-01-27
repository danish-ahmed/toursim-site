'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
_dotenv2.default.config();

(0, _middlewares2.default)(app);

var dburl = require('./config');

_bluebird2.default.promisifyAll(require("mongoose"));
_mongoose2.default.connect(process.env.DB_URL).then(function () {
    return console.log('Connected ');
}).catch(function (err) {
    return console.log(err);
});

//Dumy data
var properties = [{ id: '212', title: 'My Property', type: 'rent', 'description': 'aaaaaaaaaaa' }, { id: '122', title: 'My Property', type: 'rent', 'description': 'aaaaaaaaaaa' }, { id: '222', title: 'My Property', type: 'rent', 'description': 'aaaaaaaaaaa' }];

app.get('/api/properties', function (req, res) {
    res.json({ properties: properties });
});
var apiRoutes = require('./modules')(app);

var Port = process.env.port || 3001;

app.listen(Port, function () {
    console.log('APP IS RUNNING on ' + Port);
});
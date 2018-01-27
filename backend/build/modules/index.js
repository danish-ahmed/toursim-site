'use strict';

var userRouter = require('./users/user.routes');

module.exports = function (app) {
    app.use('/api/v1/users/', userRouter);
};
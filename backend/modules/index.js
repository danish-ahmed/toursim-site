var userRouter = require('./users/user.routes');
var activityRouter = require('./activities/activity.routes')

module.exports = (app) => {
    app.use('/api/v1/users/', userRouter);
    app.use('/api/v1/activities', activityRouter)
}

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import middleWares from './middlewares';
import Promise from 'bluebird';
import dotenv from 'dotenv';
import path from 'path'
import middlewares from './middlewares';
import fs from 'fs';

const app = express();
dotenv.config();

middlewares(app)

var dburl = require('./config');


Promise.promisifyAll(require("mongoose"));
const DEV_DB_URL = "mongodb://localhost/tours";
mongoose.connect(DEV_DB_URL)
    .then(() => console.log('Connected '))
    .catch(err => console.log(err));

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)
//Dumy data
const properties = [
    {id:'212', title: 'My Property', type: 'rent', 'description':'aaaaaaaaaaa'},
    {id:'122', title: 'My Property', type: 'rent', 'description':'aaaaaaaaaaa'},
    {id:'222', title: 'My Property', type: 'rent', 'description':'aaaaaaaaaaa'}
]



app.get('/api/properties', (req, res) => {
    res.json({properties});
})
var apiRoutes = require('./modules')(app);


app.use('/*', express.static(path.join(__dirname, '../../client/build')))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('APP IS RUNNING on '+PORT);
})
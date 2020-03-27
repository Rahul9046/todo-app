const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');

// setup express app
const app = express();

mongoose.set('useFindAndModify', false);
// connect to mongodb
mongoose.connect('mongodb://admin:1234@jajabor-shard-00-00-8sxt8.mongodb.net:27017,jajabor-shard-00-01-8sxt8.mongodb.net:27017,jajabor-shard-00-02-8sxt8.mongodb.net:27017/test?ssl=true&replicaSet=Jajabor-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(express.static('../public'));
app.use(bodyParser.json());
// initialize routes
app.use('/.netlify/functions/api', require('../src/routes/api'));

exports.handler = serverless(app);


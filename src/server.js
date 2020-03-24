const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/todoapp');
mongoose.Promise = global.Promise;

app.use(express.static('../public'));
app.use(bodyParser.json());
// initialize routes
app.use('/api', require('./routes/api'));


// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('ready to accept requests');
})
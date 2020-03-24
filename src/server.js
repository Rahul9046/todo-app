const express = require('express');

// setup express app
const app = express();

// initialize routes
app.use('/api', require('./routes/api'));

app.use(express.static('../public'));

// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('ready to accept requests');
})
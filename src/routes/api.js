const express = require('express');
const router = express.Router();
const User = require('../models/user');

// get the list of users from the db
router.get('/user', function (req, res, next){
    User.findOne({ 'details.username': req.query.usr, 'details.password': req.query.pass}).then((user)=>{
        res.send(user);
    });
});

// add a user to the db
router.post('/user', function (req, res, next){
    User.create(req.body).then(function (ninja){
        res.send(ninja);
    }).catch(next);
});

// add new todo 
router.put('/user', function (req, res, next){
    User.findOneAndUpdate(({'details.username': req.query.usr}, req.body)).then(function (){
        User.findOne({ 'details.username': req.query.usr}).then((user)=>{
            res.send(user);
        });
    });
});

module.exports = router;
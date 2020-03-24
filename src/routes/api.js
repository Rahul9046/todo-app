const express = require('express');
const router = express.Router();
const User = require('../models/user');

// get the list of users from the db
router.get('/user', function (req, res, next){
    res.send({
        status: 'GET'
    });
});

// add a user to the db
router.post('/user', function (req, res, next){
    User.create(req.body).then(function (ninja){
        res.send(ninja);
    }).catch(next);
});

module.exports = router;
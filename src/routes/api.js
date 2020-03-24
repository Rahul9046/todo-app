const express = require('express');
const router = express.Router();

// get the list of users from the db
router.get('/user', function (req, res, next){
    res.send({
        status: 'GET'
    });
});

// add a user to the db
router.post('/user', function (req, res, next){
    res.send(req.body);
});

module.exports = router;
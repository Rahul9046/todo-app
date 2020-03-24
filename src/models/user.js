const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user details Schema
const DetailsSchema = new Schema({
    username: {
        type: String,
        required : [true, 'User name required']
    },
    password:{
        type: String,
        required : [true, 'Password required']
    }
})

// create user schema and model
const  UserSchema = new Schema({
    details: DetailsSchema,
    todos: [String]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
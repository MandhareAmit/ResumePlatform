const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating user schema
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    profession:{
        type:String,
        required: true   
    }
})

module.exports = mongoose.model('user', userSchema);
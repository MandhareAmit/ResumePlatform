const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating user schema
const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type:String
    },
    profession:{
        type:String
    }
})

module.exports = mongoose.model('user', userSchema);
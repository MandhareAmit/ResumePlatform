const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating user schema
const profileSchema = new Schema({
    image: {

    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    degree:{
        type: String,
        required: true
    },
    skills:{
        type: String,
        required: true
    },
    achievment: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Profile', profileSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating user schema
const profileSchema = new Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name:{
        type:String,
        required: true
    },
    education:[
        {
            collage:{
                type: String
            },
            degree:{
                type: String
            },
            field:{
                type: String
            },

        }
    ],
    experience:[
        {
        title:{
            type: String
        },
        company:{
            type:String
        },
        from:{
            type: Date
        },
        to:{
            type: Date
        },
        current:{
            type: Boolean,
            defualt: false
        },
        description:{
            type:String
        }
    }

    ],
    achivement:[
        {
            title:{
                type:String,
                
            },
            certificate:{
                type: String,

            }
        }
    ],
    project:{
        
            title:{
                type:String
            },
            environment:{
                type:String
            },
            link:{
                type:String
            }

        }
    

});

module.exports = mongoose.model('Profile', profileSchema);
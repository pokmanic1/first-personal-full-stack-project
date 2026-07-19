const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");


const authSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
            unique: true,
            trim: true,
        },
        password:{
            type:String,
            require:true
        }

    },
    {
        timestamp:true
    }
)

const AuthDB=mongoose.model('AuthDB',authSchema);
module.exports=AuthDB
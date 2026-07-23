import mongoose from "mongoose";


const contactSchema = mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        subiect:{
            type:String,
            require:true
        },
        recenzie:{
            type:String,
            require:true
        }
    },
    {
        timestamps:true
    }
)

const ContactDB=mongoose.model('Contact',contactSchema);
module.exports= ContactDB
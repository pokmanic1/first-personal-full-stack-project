const express = require('express');
const ContactDB=require('../models/contactModel.js')

const TrimiteRecenzie= async (req ,res)=>{
    const {name,email,subiect,recenzie}=req.body

    try{
        const user =await ContactDB.findOne({email:email})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const sendContact=await ContactDB.create({
            name,
            email,
            subiect,
            recenzie
        })
    }catch(err)
    {
        res.status(400).json({message:"Err from try block from TrimiteRecenzie ",error:err})
        console.log("Err from try block from TrimiteRecenzie ",err)
    }
}

module.exports={TrimiteRecenzie}
const express = require('express');
const ContactDB=require('../models/contactModel.js')
const AuthDB=require('../models/authModel.js')
const TrimiteRecenzie= async (req ,res)=>{
    const {name,email,subiect,recenzie}=req.body

    try{
        const user =await AuthDB.findOne({email:email})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const sendContact=await ContactDB.create({
            name,
            email,
            subiect,
            recenzie
        })

        res.status(200).json({
            message:"succes",
            data:sendContact
        });
    }catch(err)
    {
        res.status(400).json({message:"Err from try block from TrimiteRecenzie ",error:err})
        console.log("Err from try block from TrimiteRecenzie ",err)
    }
}

module.exports={TrimiteRecenzie}
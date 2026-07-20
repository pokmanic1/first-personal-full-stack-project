const express = require('express');
const AuthDB = require('../models/authModel.js');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs');

const { default: mongoose } = require('mongoose');

const register = async (req, res) => {

    const { name, email, password } = req.body;
    
    try {
        const userFind=await AuthDB.findOne({email:email})
        if(userFind)
        {
            return res.status(404).json({message:"user with this emial alredy exist"})
        }

        const user = await AuthDB.create(req.body)


        console.log(name, email, password);
        res.status(200).json({ messsage: "succes" })
    } catch (err) {
        console.log(err)
        res.status(400).json({ messsage: "error" })

    }

}























const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await AuthDB.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: "user dont  exist" })
        }
        res.status(202).json({
            status: "succes",
            data: {
                email: email,
            }
        })

    } catch (err) {
        console.log("-----------------------------------------------------------------------------")
        console.log("-----------------------------------------------------------------------------")
        console.log("-----------------------------------------------------------------------------")
        console.log(err)
        console.log("-----------------------------------------------------------------------------")
        console.log("-----------------------------------------------------------------------------")
        console.log("-----------------------------------------------------------------------------")
                res.status(400).json({ messsage: "error" })

    }   

}


module.exports = { register, login };
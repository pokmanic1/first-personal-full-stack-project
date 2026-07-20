const express = require('express');
const AuthDB = require('../models/authModel.js');
const bcrypt = require('bcryptjs');

const { default: mongoose } = require('mongoose');




const register = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        const userFind = await AuthDB.findOne({ email: email })
        if (userFind) {
            return res.status(404).json({ message: "user with this emial alredy exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)


        const user = await AuthDB.create({
            name,
            email,
            password: hashedPassword,
        })


        console.log(name, email, password);


        res.status(200).json({
            messsage: "succes", data: {
                name,
                email,
                password: hashedPassword,
            }
        })


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

        const isPasswordValid=await bcrypt.compare(password,user.password)
        if (!isPasswordValid) {
        return res.status(400).json({ message: "invalid password" });
    }

        res.status(202).json({
            status: "succes",
            data: {
                id: user._id,
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
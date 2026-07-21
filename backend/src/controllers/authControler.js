const express = require('express');
const AuthDB = require('../models/authModel.js');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/generateToken.js');
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
        const token = generateToken(user.id, res);


        res.status(200).json({
            messsage: "succes", data: {
                name,
                email,
                password: hashedPassword,
            }, token
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

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ message: "invalid password" });
        }

        const token = generateToken(user.id, res);

        res.status(202).json({
            status: "succes",
            data: {
                id: user._id,
                email: email,
            }, token
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


const logout = async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({
        status: "succes",
        message: "Logged out successfully",
    });
}

module.exports = { register, login,logout };
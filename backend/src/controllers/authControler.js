const express = require('express');
const AuthDB=require('../models/authModel.js')

const register = async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const user= await AuthDB.create(req.body)


        console.log(name, email, password);
        res.status(200).json({ messsage: "succes" })
    } catch (err) {
        console.log(err)
        res.status(300).json({ messsage: "error" })

    }



}

module.exports = register
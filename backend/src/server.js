const config = require('dotenv')
const express = require('express');


const mongoose = require("mongoose");


const cors = require('cors');
const cookieParser = require('cookie-parser')
//Routes
const AuthRoutes = require('./routes/authRoute');
const ContactRoutes = require('./routes/contactRoute.js')



const app = express();
const PORT = 5001;
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,            
}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();

app.use('/auth', AuthRoutes );
app.use('/recenzii', ContactRoutes);







mongoose.connect('mongodb+srv://adimn:3EClNt98Zbioev9A@cluster0.ohmit36.mongodb.net/?appName=Cluster0')
  .then(() => {
    console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")
    console.log("----------------------------Conected to database-----------------------------")
    console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")
  }).catch((err) => {
    console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")
    console.log("----------------------------Connection failed-----------------------------")
    console.log("error", err); console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------")

  })




app.listen(PORT, () => {
  console.log("App listen to port-", PORT)
})













//primul lucru trebuie
// "npm init -y" pentru package json
//npm install express
//npm install nodemon --save-dev




//npm install dotenv
//incepem mai intai cu baza de date configurarea schema si conectarea

//.apoi facem sistemul de autentificare

//npm i bcryptjs
//npm i jsonwebtoken

//npm i zod
//validare types  
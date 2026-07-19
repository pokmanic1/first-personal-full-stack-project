const express=require('express');
const register = require('./controllers/authControler.js');

const router=express.Router();

router.post('/register',register);

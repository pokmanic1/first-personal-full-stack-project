const express = require('express');
const {TrimiteRecenzie} = require('../controllers/contactController.js')
const router = express.Router();

router.post('/send', TrimiteRecenzie);

module.exports=router
const jwt = require('jsonwebtoken');

const validateToken=async(req,res,next)=>{

    console.log(req.headers.authorization)

}

module.exports={validateToken}
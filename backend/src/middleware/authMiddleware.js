const jwt = require('jsonwebtoken');
const AuthDB = require('../models/authModel.js')
const validateToken = async (req, res) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    else if (req.cookie?.jwt) {
        token = req.cookie.jwt;
    }
    if (!token) {
        return res.status(401).json({ error: "not authorized no token" })
    }



    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const user = await AuthDB.findOne({ id: decoded.id })

        if (!user) {
            return res.status(401).json({ error: "user do not exist" });
        }
        req.user = user;
        next()
        return res.status(200).json({ message: "succes", decodedJWT: decoded });
    }
    catch (err) { console.log(err); return res.status(401).json({ error: "not authorized " }); }



};

module.exports = { validateToken };
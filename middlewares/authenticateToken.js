const jwt = require("jsonwebtoken");

const authenticateToken = async(req, res, next)=>{
    const token = req.headers['authorization'];
    if(token==null){
        return res.status(400).json({
            message:"No Authorization",
        });
    }

    jwt.verify(token, "yashmishranebanayahai", (err, user)=>{
        if(err){
            return res.status(401).json({
                message:"No Access",
            });
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
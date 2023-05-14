import jwt from 'jsonwebtoken';

export const verifyToken = async(re,res,next) => {
    try {
let token = req.header("Authorization");
     if(!token) {
        return res.status(403).send("access Denied");
     }
     if(token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trimleft();
     }

     const verified = jwt.verify(token, process.env.JWT_secret);
     req.user = verified;
     next();
     
    }
    catch(err){
        res.status(500).json({err: err.message});
    }
}
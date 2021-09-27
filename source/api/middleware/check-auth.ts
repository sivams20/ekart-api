import jwt from "jsonwebtoken";
import { decode } from "querystring";

const checkAuth = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, 'JWT_Secret_Key', null);
        req.userData = decoded;
        next();
    }catch(error){
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
}

export default checkAuth;

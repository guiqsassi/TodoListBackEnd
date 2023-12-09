import jwt from "jsonwebtoken"
import express from "express"
const verifyToken = express()

    verifyToken.use((req,res,next)=>{
        jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET, (err, decoded)=>{
            if(err){
                res.status(401)
                .json({message: "Token Inválido", error: err})
            }
            else{
                next()
            }
        })
    })

export default verifyToken;
import jwt from "jsonwebtoken"
import express from "express"
const verifyToken = express()

    verifyToken.use((req,res,next)=>{
        jwt.verify
    })
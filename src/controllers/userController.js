import { userModel } from "../models/user.js";
import bcypt from "bcrypt"
import dotenv from "dotenv"
import { response } from "express";
import jwt from "jsonwebtoken"

dotenv.config({path: "./src/config/config.env"})

const userController ={
    create: async (req,res)=>{
        const {username, password, email} = req.body
        

        bcypt.genSalt(10, (err, salt)=>{
            if(err){
                res.send(err).status(400);
            }
            bcypt.hash(password, salt, async (err, hash)=>{
                if(err){
                    res.send("houve algum erro com seu cadastro").status(400);
                }
                else{
                    const user = {
                        username, password: hash, email
                    }
                    await userModel.create(user).then((response)=>{
                        res.status(201).json({message: "usuario criado"})
            
                    }).catch((err)=>{
                        res
                        .status(401)
                        .json({message: "Usuário não foi criado"});
                    })
                }
            })
        })    
    },
  find: async(req, res)=>{
    const {email} = req.body
    await userModel.findOne({email: email}).exec().then((response)=>{
        if(!response){
            res.json({message: "user não encontrado"}).status(200)
        }
        else{
            res.json({user: response, message: "user encontrado"}).status(200)
            
        }
        

    }).catch((err)=>{
        res.send(err)
    })
  },
  login: async(req, res)=>{
    const {email, password} = req.body
        await userModel.findOne({email:email}).exec().then((response)=>{
            if(response){
                bcypt.compare(password, response.password, (err, result)=>{
                    if(result){
                        const token =jwt.sign({
                            data:{username: response.username}
                            
                        }, process.env.TOKEN_SECRET, {expiresIn: "10h"})
                        
                        res.json({username: response.username, id: response.id, token: token, message: "aqui o token do usuário"})  
                    }
                    else{
                    res.json({message:"Houve algum erro com seu login"}).status(400)
                    }
                })
            }
            else{
                res.send({message: "houve algum erro com seu login"}).status(400)
            }
        })


    }

}

export default userController;
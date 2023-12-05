import express from "express";
import userController from "../controllers/userController.js";
import verifyToken from "../verifyToken/index.js";
const userRoutes = express.Router()


userRoutes.route("/users").post((req, res)=>{
    userController.create(req,res)

})

userRoutes.get("/", verifyToken, (req,res)=>{
  
    userController.find(req,res)

})


export default userRoutes
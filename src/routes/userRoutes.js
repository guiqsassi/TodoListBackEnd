import express from "express";
import userController from "../controllers/userController.js";
const userRoutes = express.Router()


userRoutes.route("/users").post((req, res)=>{
    userController.create(req,res)

}).get((req,res)=>{
    userController.find(req,res)
})



export default userRoutes
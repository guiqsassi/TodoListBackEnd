import express from "express"
import userController from "../controllers/userController.js"

const loginRoutes = express.Router()

loginRoutes.route("/login").post((req,res)=>{
    userController.login(req,res)
})
export default loginRoutes
import express from "express"
import itemController from "../controllers/itemController.js";
import verifyToken from "../verifyToken/index.js";

const itemRoutes = express.Router();

itemRoutes.use(verifyToken)
itemRoutes.route("/items").post((req,res)=>{
    itemController.create(req,res)
})
.get((req,res)=>{
    itemController.findByUser(req,res)
})

export default itemRoutes
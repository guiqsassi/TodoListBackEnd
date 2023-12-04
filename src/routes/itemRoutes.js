import express from "express"
import itemController from "../controllers/itemController.js";

const itemRoutes = express.Router();

itemRoutes.route("/items").post((req,res)=>{
    itemController.create(req,res)
})
.get((req,res)=>{
    itemController.findByUser(req,res)
})

export default itemRoutes
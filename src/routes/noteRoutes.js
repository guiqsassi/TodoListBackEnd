import express from "express"
import noteController from "../controllers/noteController.js";
import verifyToken from "../verifyToken/index.js";

const noteRoutes = express.Router();

noteRoutes.use(verifyToken)
noteRoutes.route("/notes").post((req,res)=>{
    noteController.create(req,res)
})
.get((req,res)=>{
    noteController.findByUser(req,res)
})
.delete((req,res)=>{
    noteController.delete(req,res)
})
.put((req,res)=>{
    noteController.update(req,res)
})
export default noteRoutes
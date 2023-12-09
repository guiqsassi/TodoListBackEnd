import { response } from "express";
import { noteModel } from "../models/note.js";

const noteController = {
    create: async( req,res)=>{
        const {tittle, user, content, color} = req.body

        await noteModel.create({tittle, user, content, color}).then((response)=>{
            res.json({note: response, message: "nota criado com sucesso"}).status(201)
        }).catch((err)=>{
            res.send(err).status(400)
        })

    },
    findByUser: async(req, res)=>{
        await noteModel.find({user: req.query.user}).then((response)=>{
            res.json({notes: response, message: "notas encontrados com sucesso"}).status(200)
        }).catch((err)=>{
            res.send(err).status(400)
        })
    },
    delete: async(req,res)=>{
        console.log(req.query.id);
        await noteModel.deleteOne({_id: req.query.id}).then((response)=>{
            res.status(204)
            .json({message: "nota deletada com sucesso"})
        }).catch((err)=>{
            console.log(err);
            res.status(400)
            .json({error: err})
        })
    },
    update: async(req,res)=>{
        const note ={
            tittle: req.body.tittle,
            content: req.body.content,
            color: req.body.color
        }
        await noteModel.updateOne({_id: req.body.id}, note).then((response)=>{
            res.status(200)
            .json({response: response, message: "nota atualizada com sucesso"})
        }).catch((err)=>{
            res.status(400)
            .json({error: err, message: "erro"})
        })
    }
}

export default noteController   ;
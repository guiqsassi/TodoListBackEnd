import { response } from "express";
import { itemModel } from "../models/item.js";

const itemController = {
    create: async( req,res)=>{
        const {tittle, user} = req.body

        await itemModel.create({tittle, user}).then((response)=>{
            res.json({item: response, message: "item criado com sucesso"}).status(201)
        }).catch((err)=>{
            res.send(err).status(400)
        })

    },
    findByUser: async(req, res)=>{
        await itemModel.find({user: req.body.user}).then((response)=>{
            res.json({itens: response, message: "itens encontrados com sucesso"}).status(200)
        }).catch((err)=>{
            res.send(err).status(400)
        })
    }
}

export default itemController;
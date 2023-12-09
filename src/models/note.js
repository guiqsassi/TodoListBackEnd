import mongo from "mongoose"
import { userSchema } from "./user.js"

const {Schema} = mongo

    const noteSchema = new Schema({
        tittle:{
            type: String,
            required: false
        },
        color:{
            type: String,
            required: false
        },
        content:{
            type: String,
            required: false
        },
        user: { type: mongo.SchemaTypes.ObjectId, ref: 'users' },

})

    const noteModel = mongo.model("item", noteSchema)
export {noteSchema, noteModel}
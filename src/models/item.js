import mongo from "mongoose"
import { userSchema } from "./user.js"

const {Schema} = mongo

    const itemSchema = new Schema({
        tittle:{
            type: String,
            required: false
        },
        user: { type: mongo.SchemaTypes.ObjectId, ref: 'users' },

})

    const itemModel = mongo.model("item", itemSchema)
export {itemSchema, itemModel}
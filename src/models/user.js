import mongoose from "mongoose"
import { itemSchema } from "./item.js";

const {Schema} = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    }
})

const userModel = mongoose.model("user", userSchema)

export {userModel, userSchema};
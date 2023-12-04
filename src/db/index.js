import mongoose from "mongoose"

const mongo = mongoose


async function dbConection(){
    
    try {
        mongo.set('strictQuery', false)
        mongo.connect("mongodb://localhost:27017/todo", {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("conectado")
    } catch (error) {
        console.log(error)
    }
}

export default dbConection
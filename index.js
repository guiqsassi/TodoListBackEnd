import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";
import dbConection from "./src/db/index.js"
import cors from "cors"

    dbConection()

    // configDotenv({path: './config/config.env'})
    dotenv.config({path: "./src/config/config.env"})
    
    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(routes)
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("App rodando na porta 8000")

    })
    app.get("/", (req, res)=>{
        res.send("Hello word")
    })
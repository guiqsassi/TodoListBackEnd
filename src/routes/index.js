import express from "express"
import userRoutes from "./userRoutes.js"
import loginRoutes from "./loginRoutes.js"
import noteRoutes from "./noteRoutes.js"

const routes = express.Router()

    routes.use(userRoutes)
    routes.use(loginRoutes)
    routes.use(noteRoutes)

export default routes
import express from "express"
import userRoutes from "./userRoutes.js"
import itemRoutes from "./itemRoutes.js"
import loginRoutes from "./loginRoutes.js"

const routes = express.Router()

    routes.use(userRoutes)
    routes.use(loginRoutes)
    routes.use(itemRoutes)

export default routes
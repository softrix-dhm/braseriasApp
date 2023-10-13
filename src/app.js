import express from 'express'
import morgan from "morgan"
import cors from 'cors'

const app = express()
app.use(cors())

// Middlewares
app.use(morgan("dev"))
app.use(express.json())

import connectionRoutes from './routes/connection.routes.js'
import nominaRoutes from './routes/nomina.routes.js'
import loginRoutes from './routes/login.routes.js'

app.use("/api/connection", connectionRoutes)
app.use("/api/nomina", nominaRoutes)
app.use("/api/login", loginRoutes)

export default app
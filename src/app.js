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
import grupoRoutes from './routes/grupo.routes.js'
import productoRoutes from './routes/producto.routes.js'
import clienteRoutes from './routes/cliente.routes.js'
import pedidoRoutes from './routes/pedido.routes.js'

app.use("/api/connection", connectionRoutes)
app.use("/api/nomina", nominaRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/grupo", grupoRoutes)
app.use("/api/producto", productoRoutes)
app.use("/api/cliente", clienteRoutes)
app.use("/api/pedido", pedidoRoutes)

export default app
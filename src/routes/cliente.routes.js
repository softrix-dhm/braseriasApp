import { Router } from "express";
import { Cliente } from "../controllers/cliente.controller.js";


const router = Router()

router.get("/listado", Cliente)

export default router
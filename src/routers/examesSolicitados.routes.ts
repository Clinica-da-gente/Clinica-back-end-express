import { Router } from "express";
import {
  createExameSolicitadoController,
  deleteExameSolicitadoController,
  listAllExamesSolicitadosController,
  listOneExameSolicitadoController,
  updateExameSolicitadoController,
} from "../controllers/examesSolicitados";

const examesSolicitadosRoutes = Router();

examesSolicitadosRoutes.post("/", createExameSolicitadoController);
examesSolicitadosRoutes.get("/", listAllExamesSolicitadosController);
examesSolicitadosRoutes.get("/:id", listOneExameSolicitadoController);
examesSolicitadosRoutes.patch("/:id", updateExameSolicitadoController);
examesSolicitadosRoutes.delete("/:id", deleteExameSolicitadoController);

export { examesSolicitadosRoutes };

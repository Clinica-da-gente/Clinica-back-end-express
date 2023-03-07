import { Router } from "express";
import {
  createConsultaController,
  deleteConsultaController,
  listAllConsultasController,
  listOneConsultaController,
  updateConsultaController,
} from "../controllers/consultas";

const consultasRoutes = Router();

consultasRoutes.post("/", createConsultaController);
consultasRoutes.get("/", listAllConsultasController);
consultasRoutes.get("/:id", listOneConsultaController);
consultasRoutes.patch("/:id", updateConsultaController);
consultasRoutes.delete("/:id", deleteConsultaController);

export { consultasRoutes };

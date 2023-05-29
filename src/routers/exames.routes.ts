import { Router } from "express";
import {
  createExameController,
  deleteExameController,
  listAllExamesController,
  listOneExameController,
  updateExameController,
  listLastExamesByPacienteController,
} from "../controllers/exames";

const examesRoutes = Router();

examesRoutes.post("/", createExameController);
examesRoutes.get("/", listAllExamesController);
examesRoutes.get("/last/:id", listLastExamesByPacienteController);
examesRoutes.get("/:id", listOneExameController);
examesRoutes.patch("/:id", updateExameController);
examesRoutes.delete("/:id", deleteExameController);

export { examesRoutes };

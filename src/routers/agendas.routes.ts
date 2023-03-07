import { Router } from "express";
import {
  createAgendaController,
  deleteAgendaController,
  listAllAgendasController,
  listOneAgendaController,
  updateAgendaController,
} from "../controllers/agendas";

const agendasRoutes = Router();

agendasRoutes.post("/", createAgendaController);
agendasRoutes.get("/", listAllAgendasController);
agendasRoutes.get("/:id", listOneAgendaController);
agendasRoutes.patch("/:id", updateAgendaController);
agendasRoutes.delete("/:id", deleteAgendaController);

export { agendasRoutes };

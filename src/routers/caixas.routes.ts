import { Router } from "express";
import {
  createCaixaController,
  deleteCaixaController,
  listAllCaixasController,
  listOneCaixaController,
  updateCaixaController,
} from "../controllers/caixas";

const caixasRoutes = Router();

caixasRoutes.post("/", createCaixaController);
caixasRoutes.get("/", listAllCaixasController);
caixasRoutes.get("/:id", listOneCaixaController);
caixasRoutes.patch("/:id", updateCaixaController);
caixasRoutes.delete("/:id", deleteCaixaController);

export { caixasRoutes };

import { Router } from "express";
import {
  createAnamneseController,
  deleteAnamneseController,
  listAllAnamnesesController,
  listOneAnamneseController,
  updateAnamneseController,
} from "../controllers/anamneses";

const anamnesesRoutes = Router();

anamnesesRoutes.post("/", createAnamneseController);
anamnesesRoutes.get("/", listAllAnamnesesController);
anamnesesRoutes.get("/:id", listOneAnamneseController);
anamnesesRoutes.patch("/:id", updateAnamneseController);
anamnesesRoutes.delete("/:id", deleteAnamneseController);

export { anamnesesRoutes };

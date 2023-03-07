import { Router } from "express";
import { verifyIsNotDoctorMiddleware } from "../middlewares/pacientes/verifyIsNotDoctor.middleware";
import {
  createPacienteController,
  deletePacienteController,
  listAllPacienteController,
  listOnePacienteController,
  updatePacienteController,
} from "../controllers/pacientes";

const pacientesRoutes = Router();

pacientesRoutes.post(
  "/",
  verifyIsNotDoctorMiddleware,
  createPacienteController,
);
pacientesRoutes.get("/", listAllPacienteController);
pacientesRoutes.get("/:id", listOnePacienteController);
pacientesRoutes.patch(
  "/:id",
  verifyIsNotDoctorMiddleware,
  updatePacienteController,
);
pacientesRoutes.delete(
  "/:id",
  verifyIsNotDoctorMiddleware,
  deletePacienteController,
);

export { pacientesRoutes };

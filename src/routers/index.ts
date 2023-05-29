import { Router } from "express";
import { loginRoutes } from "./login.routes";
import { userRoutes } from "./user.routes";
import { pacientesRoutes } from "./pacientes.routes";
import { consultasRoutes } from "./consultas.routes";
import { anamnesesRoutes } from "./anamneses.routes";
import { agendasRoutes } from "./agendas.routes";
import { caixasRoutes } from "./caixas.routes";
import { examesRoutes } from "./exames.routes";
import { examesSolicitadosRoutes } from "./examesSolicitados.routes";

const routes = Router();

routes.use("/usuarios", userRoutes);
routes.use("/login", loginRoutes);
routes.use("/pacientes", pacientesRoutes);
routes.use("/consultas", consultasRoutes);
routes.use("/anamneses", anamnesesRoutes);
routes.use("/agendas", agendasRoutes);
routes.use("/caixas", caixasRoutes);
routes.use("/exames", examesRoutes);
routes.use("/examesSolicitados", examesSolicitadosRoutes);

export default routes;

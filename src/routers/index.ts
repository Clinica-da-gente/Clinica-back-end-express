import { Router } from "express";
import { loginRoutes } from "./login.routes";
import { userRoutes } from "./user.routes";
import { pacientesRoutes } from "./pacientes.routes";
import { consultasRoutes } from "./consultas.routes";
import { anamnesesRoutes } from "./anamneses.routes";
import { agendasRoutes } from "./agendas.routes";
import { caixasRoutes } from "./caixas.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/login", loginRoutes);
routes.use("/pacientes", pacientesRoutes);
routes.use("/consultas", consultasRoutes);
routes.use("/anamneses", anamnesesRoutes);
routes.use("/agendas", agendasRoutes);
routes.use("/caixas", caixasRoutes);

export default routes;

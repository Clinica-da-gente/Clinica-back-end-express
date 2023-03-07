import { Router } from "express";
import { loginController } from "../controllers/login";

const loginRoutes = Router();

loginRoutes.post("/", loginController);

export { loginRoutes };

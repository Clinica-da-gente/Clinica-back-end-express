import { Router } from "express";

import UsersController from "../controllers/users";

const usersController = new UsersController();
const userRoutes = Router();

userRoutes.post("/", usersController.create);

export default userRoutes;

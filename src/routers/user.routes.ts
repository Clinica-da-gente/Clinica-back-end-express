import { Router } from "express";

import { verifyEmailExistMiddleware } from "../middlewares/verifyEmailExist.middleware";
import { verifyUserExistMiddleware } from "../middlewares/verifyUserExist.middleware";

import {
  createUserController,
  listAllUsersController,
  listOneUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/users";

const userRoutes = Router();

userRoutes.post("/", verifyEmailExistMiddleware, createUserController);
userRoutes.get("/", listAllUsersController);
userRoutes.get("/:id", verifyUserExistMiddleware, listOneUserController);
userRoutes.patch("/:id", verifyUserExistMiddleware, updateUserController);
userRoutes.delete("/:id", verifyUserExistMiddleware, deleteUserController);

export default userRoutes;

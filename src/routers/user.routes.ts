import { Router } from "express";
import { verifyEmailExistMiddleware } from "../middlewares/usuarios/verifyEmailExist.middleware";
import { verifyUserExistMiddleware } from "../middlewares/usuarios/verifyUserExist.middleware";
import {
  createUserController,
  listAllUsersController,
  listOneUserController,
  updateUserController,
  deleteUserController,
  getProfileController,
} from "../controllers/usuarios";

const userRoutes = Router();

userRoutes.post("/", verifyEmailExistMiddleware, createUserController);
userRoutes.get("/", listAllUsersController);
userRoutes.get("/profile", getProfileController);
userRoutes.get("/:id", verifyUserExistMiddleware, listOneUserController);
userRoutes.patch("/:id", verifyUserExistMiddleware, updateUserController);
userRoutes.delete("/:id", verifyUserExistMiddleware, deleteUserController);

export { userRoutes };

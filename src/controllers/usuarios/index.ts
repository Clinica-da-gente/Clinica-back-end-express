import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createUserService } from "../../services/usuarios/createUser.service";
import { deleteUserService } from "../../services/usuarios/deleteUser.service";
import { listAllUsersServices } from "../../services/usuarios/listAllUsers.service";
import { listOneUserService } from "../../services/usuarios/listOneUser.service";
import { updateUserService } from "../../services/usuarios/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const { e_admin, e_medico, email, nome, senha, infos_medico } = req.body;
  const result = await createUserService({
    e_admin,
    e_medico,
    email,
    nome,
    senha,
    infos_medico,
  });
  res.status(201).json(result);
};

export const listAllUsersController = async (req: Request, res: Response) => {
  try {
    const result = await listAllUsersServices();
    res.status(200).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
};

export const listOneUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await listOneUserService({ _id: id });
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, infos_medico, nome } = req.body;
    await updateUserService({ _id: id, email, infos_medico, nome });
    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUserService({ _id: id });
    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
};

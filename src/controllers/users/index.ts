import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";
import { deleteUserService } from "../../services/users/deleteUser.service";
import { listAllUsers } from "../../services/users/listAllUsers.service";
import { listOneUserService } from "../../services/users/listOneUser.service";
import { updateUserService } from "../../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const { e_admin, e_medico, email, nome, senha, infos_medico } = req.body;
  console.log(infos_medico);
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
  const result = await listAllUsers();
  res.status(200).json(result);
};

export const listOneUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await listOneUserService({ _id: id });
  res.json(result);
};

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, infos_medico, nome } = req.body;
  await updateUserService({ _id: id, email, infos_medico, nome });
  res.json({ message: "User updated successfully" });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService({ _id: id });
  res.json({ message: "User deleted successfully" });
};

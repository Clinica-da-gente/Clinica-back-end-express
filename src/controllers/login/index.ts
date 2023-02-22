import { Request, Response } from "express";
import { authService } from "../../services/login/auth.service";

export const loginController = (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const token = authService({ email, senha });
  res.status(200).json({ token });
};

import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { authService } from "../../services/login/auth.service";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;
    const token = await authService({ email, senha });
    res.status(200).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
};

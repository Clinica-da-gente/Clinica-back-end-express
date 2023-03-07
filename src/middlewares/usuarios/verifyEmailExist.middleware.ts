import { usuariosCollection } from "../../mongoClient";
import { Request, Response, NextFunction } from "express";
import { AppError, handleError } from "../../errors/appError";

const verifyEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;
    const user = await usuariosCollection.findOne({ email });
    if (user) {
      throw new AppError(401, "Email already exists!");
    }
    next();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { verifyEmailExistMiddleware };

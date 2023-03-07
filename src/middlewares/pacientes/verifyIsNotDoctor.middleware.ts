import { Request, Response, NextFunction } from "express";
import { AppError, handleError } from "../../errors/appError";
import jwt from "jsonwebtoken";
import { IDecodedToken } from "../../interfaces/pacientes";
import "dotenv/config";

const verifyIsNotDoctorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new AppError(401, "Missign authorization headers");
    }

    const [, token] = authorization.split(" ");

    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    const { e_medico } = decoded as IDecodedToken;

    if (e_medico) {
      throw new AppError(401, "No permission for this");
    }

    next();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { verifyIsNotDoctorMiddleware };

import { usuariosCollection } from "../../mongoClient";
import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";
import { AppError, handleError } from "../../errors/appError";

const verifyUserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const user = await usuariosCollection.findOne({ _id: new ObjectId(id) });
    if (!user) {
      throw new AppError(401, "User not found");
    }
    next();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { verifyUserExistMiddleware };

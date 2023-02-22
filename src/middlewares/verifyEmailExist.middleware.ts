import { usersCollection } from "../mongoClient";
import { Request, Response, NextFunction } from "express";

const verifyEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;
  const user = await usersCollection.findOne({ email });
  if (user) {
    return res.status(404).json({ message: "Email already exists!" });
  }
  next();
};

export { verifyEmailExistMiddleware };

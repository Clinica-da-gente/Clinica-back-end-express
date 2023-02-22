import { usersCollection } from "../mongoClient";
import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";

const verifyUserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const user = await usersCollection.findOne({ _id: new ObjectId(id) });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  next();
};

export { verifyUserExistMiddleware };

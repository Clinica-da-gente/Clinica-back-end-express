import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users";

import { usersCollection } from "../../mongoClient";

const authService = async ({ email, senha }: IUserLogin) => {
  const user = await usersCollection.findOne({ email });
  const passwordMatch = await bcrypt.compare(senha, user!.password);
  if (!passwordMatch) {
    throw new Error("Wrong email or password");
  }
  const token = jwt.sign({ id: user!._id }, "CLINIKA_SECRET_KEY", {
    expiresIn: "1d",
  });
  return token;
};

export { authService };

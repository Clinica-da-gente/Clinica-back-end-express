import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/usuarios";

import { usuariosCollection } from "../../mongoClient";

const authService = async ({ email, senha }: IUserLogin) => {
  const user = await usuariosCollection.findOne({ email });
  if (!user) {
    throw new AppError(401, "Wrong email or password");
  }

  const passwordMatch = await bcrypt.compare(senha, user!.senha);
  if (!passwordMatch) {
    throw new AppError(401, "Wrong email or password");
  }

  const token = jwt.sign(
    { id: user!._id, e_admin: user!.e_admin, e_medico: user!.e_medico },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1d",
    },
  );

  return token;
};

export { authService };

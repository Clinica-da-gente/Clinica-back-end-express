import { usuariosCollection } from "../../mongoClient";
import { ICreateUser } from "../../interfaces/usuarios";
import bcrypt from "bcryptjs";

const createUserService = async ({
  nome,
  senha,
  email,
  e_medico,
  e_admin,
  infos_medico,
}: ICreateUser) => {
  const user: ICreateUser = {
    nome,
    senha: bcrypt.hashSync(`${senha}`, 10),
    email,
    e_medico,
    e_admin,
    esta_ativo: true,
  };

  if (infos_medico) {
    user.infos_medico = infos_medico;
  }

  await usuariosCollection.insertOne(user);

  return {
    ...user,
    senha: undefined,
  };
};

export { createUserService };

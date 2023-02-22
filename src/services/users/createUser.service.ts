import { usersCollection } from "../../mongoClient";
import { ICreateUser } from "../../interfaces/users";
import bcrypt from "bcrypt";

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
    senha: bcrypt.hashSync(senha, 10),
    email,
    e_medico,
    e_admin,
    esta_ativo: true,
  };

  if (infos_medico) {
    user.infos_medico = infos_medico;
  }

  await usersCollection.insertOne(user);

  return {
    ...user,
    senha: undefined,
  };
};

export { createUserService };

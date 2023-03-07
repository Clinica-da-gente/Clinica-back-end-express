import { ObjectId } from "mongodb";
import { IUpdateUser } from "../../interfaces/usuarios";
import { usuariosCollection } from "../../mongoClient";

const updateUserService = async ({
  _id,
  email,
  infos_medico,
  nome,
}: IUpdateUser) => {
  const user = await usuariosCollection.findOne({ _id: new ObjectId(_id) });

  const newUser = {
    ...user,
    email,
    nome,
    infos_medico: {
      registro_profissional:
        infos_medico!.registro_profissional ||
        user!.infos_medico.registro_profissional,
      especialidade:
        infos_medico!.especialidade || user!.infos_medico.especialidade,
    },
  };
  await usuariosCollection.findOneAndUpdate(
    { _id: new ObjectId(_id) },
    { $set: newUser },
  );
  return true;
};

export { updateUserService };

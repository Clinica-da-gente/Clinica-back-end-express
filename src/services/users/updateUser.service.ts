import { ObjectId } from "mongodb";
import { IUpdateUser } from "../../interfaces/users";
import { usersCollection } from "../../mongoClient";

const updateUserService = async ({
  _id,
  email,
  infos_medico,
  nome,
}: IUpdateUser) => {
  const user = await usersCollection.findOne({ _id: new ObjectId(_id) });

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
  await usersCollection.findOneAndUpdate(
    { _id: new ObjectId(_id) },
    { $set: newUser },
  );
  return true;
};

export { updateUserService };

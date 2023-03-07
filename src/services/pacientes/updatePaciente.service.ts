import { ObjectId } from "mongodb";
import { pacientesCollection } from "../../mongoClient";
import { IUpdatePaciente } from "../../interfaces/pacientes";

const updatePacienteService = async ({
  _id,
  cpf,
  data_nascimento,
  email,
  id_convenio,
  nome,
  telefone,
}: IUpdatePaciente) => {
  const paciente = await pacientesCollection.findOne({
    _id: new ObjectId(_id),
  });

  const newPaciente = {
    ...paciente,
    cpf,
    data_nascimento,
    email,
    id_convenio,
    nome,
    telefone,
  };

  await pacientesCollection.findOneAndUpdate(
    { _id: new ObjectId(_id) },
    { $set: newPaciente },
  );
  return true;
};

export { updatePacienteService };

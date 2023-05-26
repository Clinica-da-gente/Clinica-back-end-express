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
    nome: nome !== undefined ? nome : paciente!.nome,
    email: email !== undefined ? email : paciente!.email,
    cpf: cpf !== undefined ? cpf : paciente!.cpf,
    data_nascimento:
      data_nascimento !== undefined
        ? data_nascimento
        : paciente!.data_nascimento,
    telefone: telefone !== undefined ? telefone : paciente!.telefone,
    id_convenio:
      id_convenio !== undefined ? id_convenio : paciente!.id_convenio,
  };

  await pacientesCollection.findOneAndUpdate(
    { _id: new ObjectId(_id) },
    { $set: newPaciente },
  );
  return true;
};

export { updatePacienteService };

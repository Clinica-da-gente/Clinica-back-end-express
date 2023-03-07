import { ICreatePaciente } from "../../interfaces/pacientes";
import { pacientesCollection } from "../../mongoClient";

const createPacienteService = async ({
  cpf,
  data_nascimento,
  email,
  id_convenio,
  nome,
  telefone,
}: ICreatePaciente) => {
  const paciente = {
    nome,
    email,
    cpf,
    data_nascimento,
    telefone,
    esta_ativo: true,
    data_cadastro: Date.now(),
    id_convenio,
  };

  await pacientesCollection.insertOne(paciente);

  return paciente;
};

export { createPacienteService };

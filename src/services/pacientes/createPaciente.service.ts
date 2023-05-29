import { ICreatePaciente } from "../../interfaces/pacientes";
import { pacientesCollection } from "../../mongoClient";

const createPacienteService = async ({
  cpf,
  data_nascimento,
  id_convenio,
  nome,
  telefone,
  observacoes,
}: ICreatePaciente) => {
  return await pacientesCollection.insertOne({
    nome,
    cpf,
    data_nascimento,
    telefone,
    esta_ativo: true,
    data_cadastro: Date.now(),
    id_convenio,
    observacoes,
  });
};

export { createPacienteService };

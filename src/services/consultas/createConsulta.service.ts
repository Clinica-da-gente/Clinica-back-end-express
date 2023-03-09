import { ICreateConsulta } from "../../interfaces/consultas";
import { consultasCollection } from "../../mongoClient";

const createConsultaService = async ({
  atualizado_em,
  cancelada,
  compareceu,
  confirmado,
  criado_em,
  descricao,
  horario,
  medico,
  paciente,
  pago,
  usuario,
}: ICreateConsulta) => {
  return await consultasCollection.insertOne({
    atualizado_em,
    cancelada,
    compareceu,
    confirmado,
    criado_em,
    descricao,
    horario,
    medico,
    paciente,
    pago,
    usuario,
  });
};

export { createConsultaService };

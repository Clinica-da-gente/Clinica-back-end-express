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
  medico_id,
  paciente_id,
  pago,
  usuario_id,
  atendido
}: ICreateConsulta) => {
  return await consultasCollection.insertOne({
    atualizado_em,
    cancelada,
    compareceu,
    confirmado,
    criado_em,
    descricao,
    horario,
    medico_id,
    paciente_id,
    pago,
    usuario_id,
    atendido
  });
};

export { createConsultaService };

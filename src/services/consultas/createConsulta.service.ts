import { ICreateConsulta } from "../../interfaces/consultas";
import { consultasCollection } from "../../mongoClient";

const createConsultaService = async ({
  atualizado_em,
  status,
  criado_em,
  descricao,
  data,
  horario,
  medico_id,
  paciente_id,
  pago,
  usuario_id,
}: ICreateConsulta) => {
  return await consultasCollection.insertOne({
    atualizado_em,
    criado_em,
    descricao,
    data,
    horario,
    medico_id,
    paciente_id,
    pago,
    usuario_id,
    status,
  });
};

export { createConsultaService };

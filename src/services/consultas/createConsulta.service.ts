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
  const consulta = {
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
  };
  await consultasCollection.insertOne(consulta);

  return consulta;
};

export { createConsultaService };

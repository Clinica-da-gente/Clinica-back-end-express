import { examesSolicitadosCollection } from "../../mongoClient";
import { IExameSolicitadoCreate } from "../../interfaces/examesSolicitados";

const createExameSolicitadoService = async ({
  consulta_id,
  exames,
  medico_id,
  paciente_id,
}: IExameSolicitadoCreate) => {
  const exameSolicitado = {
    consulta_id,
    exames,
    medico_id,
    paciente_id,
  };

  const result = await examesSolicitadosCollection.insertOne(exameSolicitado);

  return result;
};

export { createExameSolicitadoService };

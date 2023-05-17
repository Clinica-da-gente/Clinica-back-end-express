import { examesSolicitadosCollection } from "../../mongoClient";
import { IExameSolicitadoUpdate } from "../../interfaces/examesSolicitados";
import { ObjectId } from "mongodb";

const updateExameSolicitadoService = async ({
  id,
  consulta_id,
  exames,
  medico_id,
  paciente_id,
}: IExameSolicitadoUpdate) => {
  const exam = await examesSolicitadosCollection.findOne({
    _id: new ObjectId(id),
  });
  const newExam = {
    ...exam,
    consulta_id,
    exames,
    medico_id,
    paciente_id,
  };
  await examesSolicitadosCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    newExam,
  );

  return newExam;
};

export { updateExameSolicitadoService };

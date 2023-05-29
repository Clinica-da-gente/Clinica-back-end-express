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
    exames: exames !== undefined ? exames : exam!.exames,
    medico_id: medico_id !== undefined ? medico_id : exam!.medico_id,
    paciente_id: paciente_id !== undefined ? paciente_id : exam!.paciente_id,
    consulta_id: consulta_id !== undefined ? consulta_id : exam!.consulta_id,
  };

  await examesSolicitadosCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newExam },
  );

  return newExam;
};

export { updateExameSolicitadoService };

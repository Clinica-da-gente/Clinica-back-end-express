import {
  consultasCollection,
  usuariosCollection,
  anamnesesCollection,
  examesCollection,
} from "../../mongoClient";
import { IConsultaId } from "../../interfaces/consultas";
import { ObjectId } from "mongodb";

const listLatestConsultasByPacienteService = async ({ id }: IConsultaId) => {
  const result = await consultasCollection
    .find({ paciente_id: id })
    .sort({ _id: -1 })
    .limit(10)
    .toArray();

  return Promise.all(
    result.map(async (value) => {
      return {
        ...value,
        medico: await usuariosCollection.findOne({
          _id: new ObjectId(value.medico_id),
        }),
        anamnese: await anamnesesCollection.findOne({
          consulta_id: value._id,
        }),
        exames: await examesCollection.findOne({
          consulta_id: value._id,
        }),
      };
    }),
  );
};

export { listLatestConsultasByPacienteService };

import {
  consultasCollection,
  usuariosCollection,
  anamnesesCollection,
  examesSolicitadosCollection,
} from "../../mongoClient";
import { IConsultaId } from "../../interfaces/consultas";
import { ObjectId } from "mongodb";

const listLatestConsultasByPacienteService = async ({ id }: IConsultaId) => {
  const result = await consultasCollection
    .find({
      paciente_id: id,
      $nor: [{ status: "sala de espera" }, { status: "agendado" }],
    })
    .sort({ _id: -1 })
    .limit(10)
    .toArray();

  return await Promise.all(
    result.map(async (value) => {
      return {
        ...value,
        medico: await usuariosCollection.findOne({
          _id: new ObjectId(value.medico_id),
        }),
        anamnese: await anamnesesCollection.findOne({
          consulta_id: { $eq: String(value._id) },
        }),
        exames: await examesSolicitadosCollection.findOne({
          consulta_id: { $eq: String(value._id) },
        }),
      };
    }),
  );
};

export { listLatestConsultasByPacienteService };

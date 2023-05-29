import { consultasCollection, pacientesCollection } from "../../mongoClient";
import { IConsultaId } from "../../interfaces/consultas";
import { ObjectId } from "mongodb";
import moment from "moment";

const listConsultByDoctorService = async ({ id }: IConsultaId) => {
  const time = moment().format("DD/MM/YYYY");

  const result = await consultasCollection
    .find({ medico_id: id, data: time })
    .sort({ horario: 1 })
    .toArray();

  return Promise.all(
    result.map(async (value) => {
      return {
        ...value,
        paciente: await pacientesCollection.findOne({
          _id: new ObjectId(value.paciente_id),
        }),
      };
    }),
  );
};

export { listConsultByDoctorService };

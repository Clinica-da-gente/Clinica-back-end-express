import { consultasCollection, pacientesCollection } from "../../mongoClient";
import { IConsultaId } from "../../interfaces/consultas";
import { ObjectId } from "mongodb";

const listConsultByDoctorService = async ({ id }: IConsultaId) => {
  const result = await consultasCollection
    .find({ medico_id: id, compareceu: true, atendido: false })
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

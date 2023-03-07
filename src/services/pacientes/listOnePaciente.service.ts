import { pacientesCollection } from "../../mongoClient";
import { IPacienteId } from "../../interfaces/pacientes";
import { ObjectId } from "mongodb";

const listOnePacienteService = async ({ _id }: IPacienteId) => {
  return await pacientesCollection.findOne({ _id: new ObjectId(_id) });
};

export { listOnePacienteService };

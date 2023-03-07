import { ObjectId } from "mongodb";
import { pacientesCollection } from "../../mongoClient";
import { IPacienteId } from "../../interfaces/pacientes";

const deletePacienteService = async ({ _id }: IPacienteId) => {
  await pacientesCollection.deleteOne({ _id: new ObjectId(_id) });
  return true;
};

export { deletePacienteService };

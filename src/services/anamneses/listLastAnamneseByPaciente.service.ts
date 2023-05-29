import { anamnesesCollection, consultasCollection } from "../../mongoClient";
import { IAnamneseId } from "../../interfaces/anamneses";

const listLastAnamneseByPacienteService = async ({ id }: IAnamneseId) => {
  return await anamnesesCollection.findOne(
    { paciente_id: id },
    { sort: { _id: -1 } },
  );
};

export { listLastAnamneseByPacienteService };

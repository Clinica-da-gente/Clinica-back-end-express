import { examesCollection } from "../../mongoClient";
import { IExameId } from "../../interfaces/exames";

const listLastExamesByPacienteService = async ({ id }: IExameId) => {
  return await examesCollection.findOne(
    { paciente_id: id },
    { sort: { _id: -1 } },
  );
};

export { listLastExamesByPacienteService };

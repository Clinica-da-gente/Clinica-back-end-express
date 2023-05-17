import { examesSolicitadosCollection } from "../../mongoClient";
import { IExameSolicitadoId } from "../../interfaces/examesSolicitados";
import { ObjectId } from "mongodb";

const deleteExameSolicitadoService = async ({ id }: IExameSolicitadoId) => {
  return await examesSolicitadosCollection.deleteOne({ _id: new ObjectId(id) });
};

export { deleteExameSolicitadoService };

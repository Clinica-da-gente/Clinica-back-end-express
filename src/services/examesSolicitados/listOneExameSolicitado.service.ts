import { examesSolicitadosCollection } from "../../mongoClient";
import { IExameSolicitadoId } from "../../interfaces/examesSolicitados";
import { ObjectId } from "mongodb";

const listOneExameSolicitadoService = async ({ id }: IExameSolicitadoId) => {
  return await examesSolicitadosCollection.findOne({ _id: new ObjectId(id) });
};

export { listOneExameSolicitadoService };

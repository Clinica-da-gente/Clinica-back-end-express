import { consultasCollection } from "../../mongoClient";
import { IConsultaId } from "../../interfaces/consultas";
import { ObjectId } from "mongodb";

const listOneConsultaService = async ({ id }: IConsultaId) => {
  return await consultasCollection.findOne({ _id: new ObjectId(id) });
};

export { listOneConsultaService };

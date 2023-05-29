import { ObjectId } from "mongodb";
import { IConsultaId } from "../../interfaces/consultas";
import { consultasCollection } from "../../mongoClient";

const deleteConsultaService = async ({ id }: IConsultaId) => {
  return await consultasCollection.deleteOne({ _id: new ObjectId(id) });
};

export { deleteConsultaService };

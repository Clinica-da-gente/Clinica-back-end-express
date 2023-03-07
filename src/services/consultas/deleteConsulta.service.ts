import { ObjectId } from "mongodb";
import { IConsultaId } from "../../interfaces/consultas";
import { consultasCollection } from "../../mongoClient";

const deleteConsultaService = async ({ id }: IConsultaId) => {
  await consultasCollection.deleteOne({ _id: new ObjectId(id) });

  return true;
};

export { deleteConsultaService };

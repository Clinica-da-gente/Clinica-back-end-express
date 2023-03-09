import { ObjectId } from "mongodb";
import { ICaixaId } from "../../interfaces/caixas";
import { caixasCollection } from "../../mongoClient";

const deleteCaixaService = async ({ id }: ICaixaId) => {
  return await caixasCollection.deleteOne({ _id: new ObjectId(id) });
};

export { deleteCaixaService };

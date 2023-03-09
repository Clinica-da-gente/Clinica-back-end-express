import { ObjectId } from "mongodb";
import { ICaixaId } from "../../interfaces/caixas";
import { caixasCollection } from "../../mongoClient";

const listOneCaixaService = async ({ id }: ICaixaId) => {
  return await caixasCollection.findOne({ _id: new ObjectId(id) });
};

export { listOneCaixaService };

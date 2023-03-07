import { ObjectId } from "mongodb";
import { IAnamneseId } from "../../interfaces/anamneses";
import { anamnesesCollection } from "../../mongoClient";

const listOneAnamneseService = async ({ id }: IAnamneseId) => {
  return await anamnesesCollection.findOne({ _id: new ObjectId(id) });
};

export { listOneAnamneseService };

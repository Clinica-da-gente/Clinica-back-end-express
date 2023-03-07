import { ObjectId } from "mongodb";
import { IAnamneseId } from "../../interfaces/anamneses";
import { anamnesesCollection } from "../../mongoClient";

const deleteAnamneseService = async ({ id }: IAnamneseId) => {
  await anamnesesCollection.deleteOne({ _id: new ObjectId(id) });

  return true;
};

export { deleteAnamneseService };

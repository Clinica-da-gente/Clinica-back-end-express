import { examesCollection } from "../../mongoClient";
import { IExameId } from "../../interfaces/exames";
import { ObjectId } from "mongodb";

const deleteExameService = async ({ id }: IExameId) => {
  return await examesCollection.findOneAndDelete({ _id: new ObjectId(id) });
};

export { deleteExameService };

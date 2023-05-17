import { ObjectId } from "mongodb";
import { IExameId } from "../../interfaces/exames";
import { examesCollection } from "../../mongoClient";

const listOneExameService = async ({ id }: IExameId) => {
  return await examesCollection.findOne({ _id: new ObjectId(id) });
};

export { listOneExameService };

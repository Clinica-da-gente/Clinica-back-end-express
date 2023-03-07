import { ObjectId } from "mongodb";
import { IConvenioId } from "../../interfaces/convenios";
import { conveniosCollection } from "../../mongoClient";

const deleteConvenioService = async ({ id }: IConvenioId) => {
  await conveniosCollection.deleteOne({ _id: new ObjectId(id) });
  return true;
};

export { deleteConvenioService };

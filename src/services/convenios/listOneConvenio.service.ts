import { ObjectId } from "mongodb";
import { IConvenioId } from "../../interfaces/convenios";
import { conveniosCollection } from "../../mongoClient";

const listOneConvenioService = async ({ id }: IConvenioId) => {
  return await conveniosCollection.findOne({ _id: new ObjectId(id) });
};

export { listOneConvenioService };

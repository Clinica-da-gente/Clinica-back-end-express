import { conveniosCollection } from "../../mongoClient";

const createConvenioService = async ({}) => {
  return await conveniosCollection.insertOne({});
};

export { createConvenioService };

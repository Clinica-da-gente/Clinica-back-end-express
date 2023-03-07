import { conveniosCollection } from "../../mongoClient";

const createConvenioService = async ({}) => {
  const convenio = {};
  await conveniosCollection.insertOne(convenio);
  return convenio;
};

export { createConvenioService };

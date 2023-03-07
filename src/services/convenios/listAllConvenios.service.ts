import { conveniosCollection } from "../../mongoClient";

const listAllConveniosService = async () => {
  return await conveniosCollection.find({}).toArray();
};

export { listAllConveniosService };

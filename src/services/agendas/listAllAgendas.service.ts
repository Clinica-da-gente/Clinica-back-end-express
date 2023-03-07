import { agendasCollection } from "../../mongoClient";

const listAllAgendasService = async () => {
  return await agendasCollection.find({}).toArray();
};

export { listAllAgendasService };

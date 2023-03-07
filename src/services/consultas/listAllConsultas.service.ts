import { consultasCollection } from "../../mongoClient";

const listAllConsultasService = async () => {
  return await consultasCollection.find({}).toArray();
};

export { listAllConsultasService };

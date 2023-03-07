import { anamnesesCollection } from "../../mongoClient";

const listAllAnamnesesService = async () => {
  return await anamnesesCollection.find({}).toArray();
};

export { listAllAnamnesesService };

import { examesCollection } from "../../mongoClient";

const listAllExamesService = async () => {
  return await examesCollection.find().toArray();
};

export { listAllExamesService };

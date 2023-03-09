import { caixasCollection } from "../../mongoClient";

const listAllCaixasService = async () => {
  return await caixasCollection.find({}).toArray();
};

export { listAllCaixasService };

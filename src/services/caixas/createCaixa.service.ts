import { caixasCollection } from "../../mongoClient";

const createCaixaService = async ({}) => {
  return await caixasCollection.insertOne({});
};

export { createCaixaService };

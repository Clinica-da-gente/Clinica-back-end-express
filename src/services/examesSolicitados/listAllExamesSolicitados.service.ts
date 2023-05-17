import { examesSolicitadosCollection } from "../../mongoClient";

const listAllExamesSolicitadosService = async () => {
  return await examesSolicitadosCollection.find({}).toArray();
};

export { listAllExamesSolicitadosService };

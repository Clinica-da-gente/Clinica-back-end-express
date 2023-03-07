import { pacientesCollection } from "../../mongoClient";

const listAllPacientesServices = async () => {
  return await pacientesCollection.find({}).toArray();
};

export { listAllPacientesServices };

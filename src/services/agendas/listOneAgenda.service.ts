import { agendasCollection } from "../../mongoClient";
import { IAgendaId } from "../../interfaces/agendas";
import { ObjectId } from "mongodb";

const listOneAgendaService = async ({ id }: IAgendaId) => {
  return await agendasCollection.findOne({ _id: new ObjectId(id) });
};

export { listOneAgendaService };

import { agendasCollection } from "../../mongoClient";
import { IAgendaId } from "../../interfaces/agendas";
import { ObjectId } from "mongodb";

const deleteAgendaService = async ({ id }: IAgendaId) => {
  await agendasCollection.deleteOne({ _id: new ObjectId(id) });

  return true;
};

export { deleteAgendaService };

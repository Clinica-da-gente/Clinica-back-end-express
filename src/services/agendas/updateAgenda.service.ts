import { agendasCollection } from "../../mongoClient";
import { IUpdateAgenda } from "../../interfaces/agendas";
import { ObjectId } from "mongodb";

const updateAgendaService = async ({
  id,
  consulta,
  data_hora_inicial,
  dia_da_consulta,
  horario_final,
  horario_inicial,
  medico,
}: IUpdateAgenda) => {
  const agenda = await agendasCollection.findOne({ _id: new ObjectId(id) });

  const newAgenda = {
    ...agenda,
    consulta,
    data_hora_inicial,
    dia_da_consulta,
    horario_final,
    horario_inicial,
    medico,
  };

  await agendasCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    newAgenda,
  );

  return true;
};
export { updateAgendaService };

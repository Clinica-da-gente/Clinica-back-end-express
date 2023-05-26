import { agendasCollection } from "../../mongoClient";
import { ICreateAgenda } from "../../interfaces/agendas";

const createAgendaService = async ({
  consulta_id,
  data_hora_inicial,
  dia_da_consulta,
  horario_final,
  horario_inicial,
  medico_id,
}: ICreateAgenda) => {
  const agenda = {
    consulta_id,
    data_hora_inicial,
    dia_da_consulta,
    horario_final,
    horario_inicial,
    medico_id,
  };

  await agendasCollection.insertOne(agenda);

  return agenda;
};

export { createAgendaService };

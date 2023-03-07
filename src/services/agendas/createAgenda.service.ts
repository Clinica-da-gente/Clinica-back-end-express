import { agendasCollection } from "../../mongoClient";
import { ICreateAgenda } from "../../interfaces/agendas";

const createAgendaService = async ({
  consulta,
  data_hora_inicial,
  dia_da_consulta,
  horario_final,
  horario_inicial,
  medico,
}: ICreateAgenda) => {
  const agenda = {
    consulta,
    data_hora_inicial,
    dia_da_consulta,
    horario_final,
    horario_inicial,
    medico,
  };

  await agendasCollection.insertOne(agenda);

  return agenda;
};

export { createAgendaService };

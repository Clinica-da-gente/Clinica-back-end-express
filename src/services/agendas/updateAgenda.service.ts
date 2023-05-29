import { agendasCollection } from "../../mongoClient";
import { IUpdateAgenda } from "../../interfaces/agendas";
import { ObjectId } from "mongodb";

const updateAgendaService = async ({
  id,
  consulta_id,
  data_hora_inicial,
  dia_da_consulta,
  horario_final,
  horario_inicial,
  medico_id,
}: IUpdateAgenda) => {
  const agenda = await agendasCollection.findOne({ _id: new ObjectId(id) });

  const newAgenda = {
    consulta_id: consulta_id !== undefined ? consulta_id : agenda!.consulta_id,
    medico_id: medico_id !== undefined ? medico_id : agenda!.medico_id,
    data_hora_inicial:
      data_hora_inicial !== undefined
        ? data_hora_inicial
        : agenda!.data_hora_inicial,
    dia_da_consulta:
      dia_da_consulta !== undefined ? dia_da_consulta : agenda!.dia_da_consulta,
    horario_final:
      horario_final !== undefined ? horario_final : agenda!.horario_final,
    horario_inicial:
      horario_inicial !== undefined ? horario_inicial : agenda!.horario_inicial,
  };

  await agendasCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newAgenda },
  );

  return true;
};
export { updateAgendaService };

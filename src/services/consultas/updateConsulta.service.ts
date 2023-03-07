import { consultasCollection } from "../../mongoClient";
import { IUpdateConsulta } from "../../interfaces/consultas";
import { ObjectId } from "mongodb";

const updateConsultaService = async ({
  id,
  cancelada,
  compareceu,
  confirmado,
  descricao,
  horario,
  medico,
  paciente,
  pago,
  usuario,
}: IUpdateConsulta) => {
  const consulta = await consultasCollection.findOne({
    _id: new ObjectId(id),
  });

  const newConsulta = {
    ...consulta,
    cancelada,
    compareceu,
    confirmado,
    descricao,
    horario,
    medico,
    paciente,
    pago,
    usuario,
    atualizado_em: `${Date.now()}`,
  };

  await consultasCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    newConsulta,
  );

  return true;
};

export { updateConsultaService };

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
  medico_id,
  paciente_id,
  pago,
  usuario_id,
  atendido,
}: IUpdateConsulta) => {
  const consulta = await consultasCollection.findOne({
    _id: new ObjectId(id),
  });

  const newConsulta = {
    _id: consulta!._id,
    cancelada: cancelada !== undefined ? cancelada : consulta!.cancelada,
    compareceu: compareceu !== undefined ? compareceu : consulta!.compareceu,
    confirmado: confirmado !== undefined ? confirmado : consulta!.confirmado,
    descricao: descricao !== undefined ? descricao : consulta!.descricao,
    horario: horario !== undefined ? horario : consulta!.horario,
    medico_id: medico_id !== undefined ? medico_id : consulta!.medico_id,
    paciente_id:
      paciente_id !== undefined ? paciente_id : consulta!.paciente_id,
    pago: pago !== undefined ? pago : consulta!.pago,
    usuario_id: usuario_id !== undefined ? usuario_id : consulta!.usuario_id,
    atendido: atendido !== undefined ? atendido : consulta!.atendido,
    atualizado_em: `${Date.now()}`,
  };

  await consultasCollection.findOneAndReplace(
    { _id: new ObjectId(id) },
    newConsulta,
  );

  return newConsulta;
};

export { updateConsultaService };

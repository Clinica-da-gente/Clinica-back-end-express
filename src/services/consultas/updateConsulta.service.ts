import { consultasCollection } from "../../mongoClient";
import { IUpdateConsulta } from "../../interfaces/consultas";
import { ObjectId } from "mongodb";

const updateConsultaService = async ({
  id,
  descricao,
  data,
  horario,
  medico_id,
  paciente_id,
  pago,
  usuario_id,
  status,
}: IUpdateConsulta) => {
  const consulta = await consultasCollection.findOne({
    _id: new ObjectId(id),
  });

  const newConsulta = {
    _id: consulta!._id,
    descricao: descricao !== undefined ? descricao : consulta!.descricao,
    data: data !== undefined ? data : consulta!.data,
    horario: horario !== undefined ? horario : consulta!.horario,
    medico_id: medico_id !== undefined ? medico_id : consulta!.medico_id,
    paciente_id:
      paciente_id !== undefined ? paciente_id : consulta!.paciente_id,
    pago: pago !== undefined ? pago : consulta!.pago,
    usuario_id: usuario_id !== undefined ? usuario_id : consulta!.usuario_id,
    status: status !== undefined ? status : consulta!.status,
    atualizado_em: `${Date.now()}`,
  };
  
  await consultasCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newConsulta },
  );

  return newConsulta;
};

export { updateConsultaService };

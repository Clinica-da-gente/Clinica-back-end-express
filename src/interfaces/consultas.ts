export interface IConsultaId {
  id: string;
}

export interface ICreateConsulta {
  data: string;
  horario: string;
  paciente_id: string;
  usuario_id: string;
  medico_id: string;
  descricao: string;
  pago: boolean;
  criado_em: string;
  atualizado_em: string;
  status: string;
}

export interface IUpdateConsulta {
  id: string;
  data?: string;
  horario?: string;
  paciente_id?: string;
  usuario_id?: string;
  medico_id?: string;
  descricao?: string;
  pago?: boolean;
  status?: string;
}

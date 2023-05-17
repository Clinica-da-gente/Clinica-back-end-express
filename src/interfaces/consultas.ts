export interface IConsultaId {
  id: string;
}

export interface ICreateConsulta {
  horario: string;
  paciente_id: string;
  usuario_id: string;
  medico_id: string;
  descricao: string;
  confirmado: boolean;
  compareceu: boolean;
  pago: boolean;
  cancelada: boolean;
  atendido: boolean;
  criado_em: string;
  atualizado_em: string;
}

export interface IUpdateConsulta {
  id: string;
  horario?: string;
  paciente_id?: string;
  usuario_id?: string;
  medico_id?: string;
  descricao?: string;
  confirmado?: boolean;
  compareceu?: boolean;
  pago?: boolean;
  cancelada?: boolean;
  atendido?: boolean;
}

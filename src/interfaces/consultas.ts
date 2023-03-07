export interface IConsultaId {
  id: string;
}

export interface ICreateConsulta {
  horario: string;
  paciente: string;
  usuario: string;
  medico: string;
  descricao: string;
  confirmado: boolean;
  compareceu: boolean;
  pago: boolean;
  cancelada: boolean;
  criado_em: string;
  atualizado_em: string;
}

export interface IUpdateConsulta {
  id: string;
  horario?: string;
  paciente?: string;
  usuario?: string;
  medico?: string;
  descricao?: string;
  confirmado?: boolean;
  compareceu?: boolean;
  pago?: boolean;
  cancelada?: boolean;
}

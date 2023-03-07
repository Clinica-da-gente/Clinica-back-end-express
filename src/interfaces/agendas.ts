export interface IAgendaId {
  id: string;
}

export interface ICreateAgenda {
  dia_da_consulta: string;
  horario_inicial: string;
  horario_final: string;
  data_hora_inicial: string;
  medico: string;
  consulta: string;
}

export interface IUpdateAgenda {
  id: string;
  dia_da_consulta?: string;
  horario_inicial?: string;
  horario_final?: string;
  data_hora_inicial?: string;
  medico?: string;
  consulta?: string;
}

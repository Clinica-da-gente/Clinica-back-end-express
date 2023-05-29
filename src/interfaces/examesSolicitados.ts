export interface IExameSolicitadoId {
  id: string;
}

export interface IExameSolicitadoCreate {
  exames: IExameSolicitadoId[];
  consulta_id: string;
  paciente_id: string;
  medico_id: string;
}

export interface IExameSolicitadoUpdate {
  id: string;
  exames?: IExameSolicitadoId[];
  consulta_id?: string;
  paciente_id?: string;
  medico_id?: string;
}

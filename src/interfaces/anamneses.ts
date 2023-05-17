export interface IAnamneseId {
  id: string;
}

export interface ICreateAnamnese {
  descricao: string;
  consulta_id: string;
  criado_em: string;
  paciente_id: string;
}

export interface IUpdateAnamnese {
  id: string;
  descricao: string;
}

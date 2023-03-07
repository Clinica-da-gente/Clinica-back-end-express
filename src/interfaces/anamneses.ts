export interface IAnamneseId {
  id: string;
}

export interface ICreateAnamnese {
  descricao: string;
  paciente: string;
  criado_em: string;
}

export interface IUpdateAnamnese {
  id: string;
  descricao: string;
}

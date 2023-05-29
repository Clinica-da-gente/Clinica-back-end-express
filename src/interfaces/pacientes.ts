export interface IPacienteId {
  _id: string;
}

export interface ICreatePaciente {
  nome: string;
  // email: string;
  cpf: string;
  telefone: string;
  data_nascimento: string;
  id_convenio: string;
  observacoes?: string;
}

export interface IUpdatePaciente {
  _id: string;
  nome?: string;
  email?: string;
  cpf?: string;
  telefone?: string;
  data_nascimento?: string;
  id_convenio?: string;
}

export interface IDecodedToken {
  id: string;
  e_admin: boolean;
  e_medico: boolean;
  iat: number;
  exp: number;
}

export interface IUserId {
  _id: string;
}

export interface ICreateUser {
  nome: string;
  email: string;
  senha: string;
  e_medico: boolean;
  e_admin: boolean;
  esta_ativo?: boolean;
  infos_medico?: {
    registro_profissional: string;
    especialidade: string;
  };
}

export interface IUpdateUser {
  _id?: string;
  nome?: string;
  email?: string;
  infos_medico?: {
    registro_profissional?: string;
    especialidade?: string;
  };
}

export interface IUserLogin {
  email: string;
  senha: string;
}

export interface IExameId {
  id: string;
}

export interface IExame {
  _id: string;
  nome: string;
  executante: string;
  valor: string;
  convenios: IConvenioExame[];
}

export interface IExameCreate {
  nome: string;
  executante: string;
  valor: string;
  convenios: IConvenioExame[];
}

export interface IExameUpdate {
  id: string;
  nome?: string;
  executor?: string;
  valor?: string;
  convenios?: IConvenioExameUpdate[];
}

export interface IConvenioExame {
  convenio_id: string;
  valor: string;
}

export interface IConvenioExameUpdate {
  convenio_id?: string;
  valor?: string;
}

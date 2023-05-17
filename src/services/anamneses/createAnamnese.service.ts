import { ICreateAnamnese } from "../../interfaces/anamneses";
import { anamnesesCollection } from "../../mongoClient";

const createAnamneseService = async ({
  criado_em,
  descricao,
  consulta_id,
  paciente_id,
}: ICreateAnamnese) => {
  const anamnese = {
    descricao,
    criado_em,
    consulta_id,
    paciente_id,
  };

  await anamnesesCollection.insertOne(anamnese);

  return anamnese;
};

export { createAnamneseService };

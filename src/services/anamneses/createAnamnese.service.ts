import { ICreateAnamnese } from "../../interfaces/anamneses";
import { anamnesesCollection } from "../../mongoClient";

const createAnamneseService = async ({
  criado_em,
  descricao,
  paciente,
}: ICreateAnamnese) => {
  const anamnese = {
    descricao,
    criado_em,
    paciente,
  };

  await anamnesesCollection.insertOne(anamnese);

  return anamnese;
};

export { createAnamneseService };

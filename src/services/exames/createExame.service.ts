import { IExameCreate } from "../../interfaces/exames";
import { examesCollection } from "../../mongoClient";

const createExameService = async ({
  convenios,
  executante,
  nome,
  valor,
}: IExameCreate) => {
  const data = {
    convenios,
    executante,
    nome,
    valor,
  };

  return await examesCollection.insertOne(data);
};

export { createExameService };

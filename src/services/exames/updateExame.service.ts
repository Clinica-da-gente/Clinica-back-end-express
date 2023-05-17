import { ObjectId } from "mongodb";
import { IExameUpdate } from "../../interfaces/exames";
import { examesCollection } from "../../mongoClient";

const updateExameService = async ({
  id,
  convenios,
  executor,
  nome,
  valor,
}: IExameUpdate) => {
  const exame = await examesCollection.findOne({ _id: new ObjectId(id) });
  const newExame = {
    ...exame,
    convenios,
    executor,
    nome,
    valor,
  };
  await examesCollection.findOneAndUpdate({ _id: new ObjectId(id) }, newExame);

  return newExame;
};

export { updateExameService };

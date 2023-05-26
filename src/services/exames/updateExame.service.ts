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
    nome: nome !== undefined ? nome : exame!.nome,
    valor: valor !== undefined ? valor : exame!.valor,
    executor: executor !== undefined ? executor : exame!.executor,
    convenios: convenios !== undefined ? convenios : exame!.convenios,
  };

  await examesCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newExame },
  );

  return newExame;
};

export { updateExameService };

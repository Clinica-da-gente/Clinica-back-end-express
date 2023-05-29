import { ObjectId } from "mongodb";
import { ICaixaUpdate } from "../../interfaces/caixas";
import { caixasCollection } from "../../mongoClient";

const updateCaixaService = async ({ id }: ICaixaUpdate) => {
  const caixa = await caixasCollection.findOne({ _id: new ObjectId(id) });

  const newCaixa = {
    ...caixa,
  };

  await caixasCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newCaixa },
  );

  return newCaixa;
};

export { updateCaixaService };

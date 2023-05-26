import { ObjectId } from "mongodb";
import { IUpdateAnamnese } from "../../interfaces/anamneses";
import { anamnesesCollection } from "../../mongoClient";

const updateAnamneseService = async ({ id, descricao }: IUpdateAnamnese) => {
  const anamnese = await anamnesesCollection.findOne({ _id: new ObjectId(id) });

  const newAnamnese = {
    descricao: descricao !== undefined ? descricao : anamnese!.descricao,
  };

  await anamnesesCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newAnamnese },
  );

  return true;
};

export { updateAnamneseService };

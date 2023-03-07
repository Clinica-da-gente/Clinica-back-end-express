import { ObjectId } from "mongodb";
import { IUserId } from "../../interfaces/usuarios";
import { usuariosCollection } from "../../mongoClient";

const listOneUserService = async ({ _id }: IUserId) => {
  const user = await usuariosCollection.findOne({ _id: new ObjectId(_id) });
  return {
    ...user,
    senha: undefined,
  };
};

export { listOneUserService };

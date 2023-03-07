import { ObjectId } from "mongodb";
import { IUserId } from "../../interfaces/usuarios";
import { usuariosCollection } from "../../mongoClient";

const deleteUserService = async ({ _id }: IUserId) => {
  await usuariosCollection.deleteOne({ _id: new ObjectId(_id) });
  return true;
};

export { deleteUserService };

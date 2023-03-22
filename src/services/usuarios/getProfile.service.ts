import { ObjectId } from "mongodb";
import { IUserId } from "../../interfaces/usuarios";
import { usuariosCollection } from "../../mongoClient";

const getProfileService = async ({ _id }: IUserId) => {
  return await usuariosCollection.findOne({ _id: new ObjectId(_id) });
};

export { getProfileService };

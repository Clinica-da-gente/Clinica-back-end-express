import { ObjectId } from "mongodb";
import { IUserId } from "../../interfaces/users";
import { usersCollection } from "../../mongoClient";

const listOneUserService = async ({ _id }: IUserId) => {
  const user = await usersCollection.findOne({ _id: new ObjectId(_id) });
  return {
    ...user,
    senha: undefined,
  };
};

export { listOneUserService };

import { ObjectId } from "mongodb";
import { IUserId } from "../../interfaces/users";
import { usersCollection } from "../../mongoClient";

const deleteUserService = async ({ _id }: IUserId) => {
  await usersCollection.deleteOne({ _id: new ObjectId(_id) });
};

export { deleteUserService };

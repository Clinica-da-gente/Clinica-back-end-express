import { usersCollection } from "../../mongoClient";

const listAllUsers = async () => {
  const data = await usersCollection.find({}).toArray();
  const result = data.map((user) => {
    return {
      ...user,
      senha: undefined,
    };
  });
  return result;
};

export { listAllUsers };

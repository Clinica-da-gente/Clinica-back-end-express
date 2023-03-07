import { usuariosCollection } from "../../mongoClient";

const listAllUsersServices = async () => {
  const data = await usuariosCollection.find({}).toArray();
  const result = data.map((user) => {
    return {
      ...user,
      senha: undefined,
    };
  });
  return result;
};

export { listAllUsersServices };

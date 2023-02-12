import { usersCollection } from "../../mongoClient";

const createUser = async () => {
  const result = await usersCollection.findOne({});
};

export default createUser;

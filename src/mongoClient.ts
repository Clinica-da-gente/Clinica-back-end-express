import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:admin1234@clinika.jjmivcd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "clinika";

const db = client.db(dbName);

const usersCollection = db.collection("users");

export { client, usersCollection };

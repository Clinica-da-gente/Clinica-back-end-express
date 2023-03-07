import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:admin1234@clinika.jjmivcd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "clinika";

const db = client.db(dbName);

const agendasCollection = db.collection("agendas");
const anamnesesCollection = db.collection("anamneses");
const consultasCollection = db.collection("consultas");
const conveniosCollection = db.collection("convenios");
const pacientesCollection = db.collection("pacientes");
const usuariosCollection = db.collection("usuarios");

export {
  client,
  agendasCollection,
  anamnesesCollection,
  consultasCollection,
  conveniosCollection,
  pacientesCollection,
  usuariosCollection,
};

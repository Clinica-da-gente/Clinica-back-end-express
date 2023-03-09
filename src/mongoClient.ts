import { MongoClient } from "mongodb";

const url = process.env.DB_URI!;
const client = new MongoClient(url);

const dbName = "clinika";

const db = client.db(dbName);

const agendasCollection = db.collection("agendas");
const anamnesesCollection = db.collection("anamneses");
const consultasCollection = db.collection("consultas");
const conveniosCollection = db.collection("convenios");
const pacientesCollection = db.collection("pacientes");
const usuariosCollection = db.collection("usuarios");
const caixasCollection = db.collection("caixas");

export {
  client,
  agendasCollection,
  anamnesesCollection,
  consultasCollection,
  conveniosCollection,
  pacientesCollection,
  usuariosCollection,
  caixasCollection,
};

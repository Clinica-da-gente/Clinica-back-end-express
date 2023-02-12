import express, { Request, Response, NextFunction } from "express";
import { client } from "./mongoClient";
import routes from "./routers";

const app = express();

app.use(express.json());
app.use(routes);

const port = 3000;

const start = async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
};

start();

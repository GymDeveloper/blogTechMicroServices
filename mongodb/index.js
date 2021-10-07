import express from "express";
import { database_port_microservice } from "../config/config";
import mongoRouter from "./network";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoRouter);

//* database_port_microservice : 3001
app.listen(database_port_microservice, () =>
  console.log(
    `Servidor de base de datos inicializado en el puerto ${database_port_microservice}`
  )
);

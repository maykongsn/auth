import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./middlewares/error";
import { dataSource } from "./database/data-source";

dataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(errorMiddleware);

  app.listen(3000);
});

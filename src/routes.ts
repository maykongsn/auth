import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

routes.post("/register", new CreateUserController().handle);

export default routes;

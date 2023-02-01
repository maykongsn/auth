import { Router } from "express";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

routes.post("/register", new CreateUserController().handle);
routes.post("/auth", new AuthUserController().handle);

export default routes;

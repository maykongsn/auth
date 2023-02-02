import { Router } from "express";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { auth } from "./middlewares/auth";

const routes = Router();

routes.post("/register", new CreateUserController().handle);
routes.post("/auth", new AuthUserController().handle);

routes.use(auth);

routes.get("/users", new GetAllUsersController().handle);

export default routes;

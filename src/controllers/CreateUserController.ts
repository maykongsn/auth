import { Response, Request } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const service = new CreateUserService();
    const result = await service.execute({ name, email, password });

    return response.json(result);
  }
}

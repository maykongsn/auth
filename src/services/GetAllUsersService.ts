import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";

export class GetAllUsersService {
  async execute(): Promise<User[]> {
    const users = await userRepository.find();

    return users;
  }
}

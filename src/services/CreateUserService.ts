import bcrypt from "bcrypt";
import { User } from "../entities/User";
import { BadRequestError } from "../helpers/api-errors";
import { userRepository } from "../repositories/userRepository";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: UserRequest): Promise<User> {
    const userExists = await userRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestError("User already exists.");
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entities/User";

import { BadRequestError } from "../helpers/api-errors";
import { userRepository } from "../repositories/userRepository";

interface UserRequest {
  email: string;
  password: string;
}

interface UserResponse {
  user: User;
  token: string;
}

export class AuthUserService {
  async execute({ email, password }: UserRequest): Promise<UserResponse> {
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestError("E-mail ou senha inválidos.");
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new BadRequestError("E-mail ou senha inválidos.");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, {
      expiresIn: "8h",
    });

    return { user, token };
  }
}

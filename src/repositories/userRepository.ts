import { dataSource } from "../database/data-source";
import { User } from "../entities/User";

export const userRepository = dataSource.getRepository(User);

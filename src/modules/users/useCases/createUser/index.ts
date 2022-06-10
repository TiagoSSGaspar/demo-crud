import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UsersRepository } from "../../infra/repositories/UsersRepository";

const usersRepository = UsersRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
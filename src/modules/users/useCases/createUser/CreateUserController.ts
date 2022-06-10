import { CreateUserUseCase } from "./CreateUserUseCase";
import { User } from "./User";

export class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: any): Promise<User> {
    const { username, email, password } = request;

    const user = await this.createUserUseCase.execute({ username, email, password });

    return user;
  }

}

import { ListTaskUseCase } from "./ListTaskUseCase";
import { Task } from "./Task";

interface IRequest {
  user_id: string;
}

export class ListTaskController {

  constructor(private listTaskUseCase: ListTaskUseCase) { }

  async handle({ user_id }: IRequest): Promise<Task[]> {
    return await this.listTaskUseCase.execute({ user_id });

  }

}

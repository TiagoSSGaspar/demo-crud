import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { ICreateTaskDTO } from "./ICreateTaskDTO";
import { Task } from "./Task";


export class CreateTaskController {

  constructor(private createTaskUseCase: CreateTaskUseCase) { }

  async handle(request: ICreateTaskDTO): Promise<Task> {
    const dataTask = request;

    const task = await this.createTaskUseCase.execute(dataTask);

    return task;
  }

}

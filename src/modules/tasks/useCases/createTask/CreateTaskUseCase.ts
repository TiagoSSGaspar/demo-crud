import { ITasksRepository } from "./ITasksRepository";
import { Task } from "./Task";


interface IRequest {
  id?: string;
  title: string;
  description: string;
  user_id: string;
}

class CreateTaskUseCase {

  constructor(private tasksRepository: ITasksRepository) { }

  async execute(dataTask: IRequest): Promise<Task> {
    const task = await this.tasksRepository.create(dataTask);

    return task;
  }

}

export { CreateTaskUseCase }
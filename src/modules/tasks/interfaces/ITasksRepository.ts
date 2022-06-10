import { Task } from "../infra/entities/Task";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<Task>;
  filter(title: string, description: string): Promise<Task[]>;
  list(user_id: string): Promise<Task[]>;
  findById(task_id: string): Promise<Task>;
  delete(task_id: string): Promise<void>;
}

export { ITasksRepository }
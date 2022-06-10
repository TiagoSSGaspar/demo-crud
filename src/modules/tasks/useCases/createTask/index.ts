import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { TasksRepository } from "../../infra/repositories/TasksRepository";


const tasksRepository = TasksRepository.getInstance();
const createTaskUseCase = new CreateTaskUseCase(tasksRepository);
const createTaskController = new CreateTaskController(createTaskUseCase)

export { createTaskController }
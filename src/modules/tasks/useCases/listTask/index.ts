import { ListTaskController } from "./ListTaskController";
import { ListTaskUseCase } from "./ListTaskUseCase";
import { TasksRepository } from "../../infra/repositories/TasksRepository";


const tasksRepository = TasksRepository.getInstance();
const listTaskUseCase = new ListTaskUseCase(tasksRepository);
const listTaskController = new ListTaskController(listTaskUseCase)

export { listTaskController }
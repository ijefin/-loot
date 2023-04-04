import { Task } from "../entities/Task";
import { TaskManager } from "../repositories/taskRepository";

export class GetAllTasksService {
  async execute(): Promise<Task[] | Error> {
    const repository = new TaskManager();

    const allTasks = await repository.getAllTasks();

    return allTasks;
  }
}

import { Task } from "../entities/Task";
import { taskRepository } from "../repositories/taskRepository";

export class GetAllTasksService {
  async execute(): Promise<Task[] | Error> {
    const allTasks = await taskRepository.find();

    return allTasks;
  }
}

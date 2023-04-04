import { Task } from "../entities/Task";
import { TaskManager } from "../repositories/taskRepository";

export class UpdateTaskService {
  async execute({ id, name, description }) {
    const repository = new TaskManager();

    const updatedTask = await repository.updateTask({ id, name, description });

    return updatedTask;
  }
}

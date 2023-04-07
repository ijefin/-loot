import { Task } from "../entities/Task";
import { TaskManager } from "../repositories/taskRepository";

export class UpdateTaskService {
  async execute({ id, name, description, done, status }) {
    const repository = new TaskManager();

    const updatedTask = await repository.updateTask({
      id,
      name,
      description,
      done,
      status,
    });

    return updatedTask;
  }
}

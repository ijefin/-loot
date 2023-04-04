import { Task } from "../entities/Task";
import { taskRepository, TaskManager } from "../repositories/taskRepository";

export class CreateNewTaskService {
  async execute({ name, description }: Partial<Task>): Promise<Task | Error> {
    const repository = new TaskManager();

    const newTask = await repository.createNewTask(name, description);

    await taskRepository.save(newTask);

    return newTask;
  }
}

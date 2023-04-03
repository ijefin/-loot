import { Task } from "../entities/Task";
import { taskRepository } from "../repositories/taskRepository";

export class CreateNewTaskService {
  async execute({ name, description }: Partial<Task>): Promise<Task | Error> {
    const newTask = taskRepository.create({
      name,
      description,
      done: false,
    });

    await taskRepository.save(newTask);

    return newTask;
  }
}

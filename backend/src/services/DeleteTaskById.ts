import { TaskManager } from "../repositories/taskRepository";

export class DeleteTaskService {
  async execute(id: number) {
    const repository = new TaskManager();

    await repository.deleteTask(id);
  }
}

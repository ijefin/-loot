import appDataSource from "../dataSource";
import { Task } from "../entities/Task";

export const taskRepository = appDataSource.getRepository(Task);

export class TaskManager {
  getAllTasks = async () => taskRepository.find();

  getUnfinishedByName = async (name: string) => {
    return taskRepository
      .createQueryBuilder()
      .select("tasks.name")
      .from(Task, "tasks")
      .where("tasks.name = :name", { name: name })
      .andWhere("tasks.done = :done", { done: false })
      .getOne();
  };

  createNewTask = async (
    name: string | undefined,
    description: string | undefined
  ) =>
    taskRepository.create({
      name,
      description,
      done: false,
    });

  updateTask = async ({ id, name, description }: Partial<Task>) => {
    taskRepository
      .createQueryBuilder()
      .update(Task)
      .set({ name: name, description: description })
      .where("id = :id", { id })
      .execute();
  };
}

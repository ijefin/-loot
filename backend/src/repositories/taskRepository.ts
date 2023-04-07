import appDataSource from "../dataSource";
import { Task } from "../entities/Task";

export const taskRepository = appDataSource.getRepository(Task);

export class TaskManager {
  getAllTasks = async () => taskRepository.find();

  getTaskById = async (id: number) => {
    return await taskRepository
      .createQueryBuilder()
      .select("tasks.id")
      .from(Task, "tasks")
      .where("tasks.id = :id", { id: id })
      .getOne();
  };

  getUnfinishedByName = async (name: string) => {
    return await taskRepository
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
      status: "Pendente",
    });

  updateTask = async ({
    id,
    name,
    description,
    done,
    status,
  }: Partial<Task>) => {
    taskRepository
      .createQueryBuilder()
      .update(Task)
      .set({ name: name, description: description, done: done, status: status })
      .where("id = :id", { id })
      .execute();
  };

  deleteTask = async (id: number) => {
    taskRepository
      .createQueryBuilder()
      .delete()
      .from(Task)
      .where("id = :id", { id })
      .execute();
  };
}

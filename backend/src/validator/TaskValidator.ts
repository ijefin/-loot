import { Task } from "../entities/Task";
import { taskRepository } from "../repositories/taskRepository";

export const TaskValidator = async (name: string) => {
  const task = taskRepository
    .createQueryBuilder()
    .select("tasks.name")
    .from(Task, "tasks")
    .where("tasks.name = :name", { name: name })
    .andWhere("tasks.done = :done", { done: false })
    .getOne();

  return task;
};

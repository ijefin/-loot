import appDataSource from "../dataSource";
import { Task } from "../entities/Task";

export const taskRepository = appDataSource.getRepository(Task);

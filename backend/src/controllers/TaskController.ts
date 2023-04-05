import { Request, Response } from "express";
import { GetAllTasksService } from "../services/GetAllTasksServices";
import { CreateNewTaskService } from "../services/CreateNewTaskService";
import { UpdateTaskService } from "../services/UpdateTaskService";
import { TaskManager } from "../repositories/taskRepository";
import { Task } from "../entities/Task";
import {
  verifyEmptyDescription,
  verifyEmptyName,
  verifyTaskExistence,
} from "../validators/taskValidator";

export default class Tasks {
  getAll = async (req: Request, res: Response) => {
    const service = new GetAllTasksService();

    const result = await service.execute();

    return res.status(200).json({ message: result });
  };

  newTask = async (req: Request, res: Response) => {
    const { name, description }: Task = req.body;
    const service = new CreateNewTaskService();

    if (await verifyEmptyName(name)) {
      res.status(400).json({ message: "Digite um nome válido para a tarefa!" });
      return;
    }

    if (await verifyEmptyDescription(description)) {
      res.status(400).json({ message: "Digite uma descrição válida!" });
      return;
    }

    if (await verifyTaskExistence(name)) {
      res.status(400).json({
        message:
          "Já existe uma tarefa com este nome e ainda não foi finalizada!",
      });
      return;
    }

    const createdTask = await service.execute({ name, description });

    return res
      .status(201)
      .json({ message: "Tarefa criado com sucesso!", createdTask });
  };

  updateTask = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const { id } = req.params;
    const service = new UpdateTaskService();

    if (await verifyEmptyName(name)) {
      res.status(400).json({ message: "Digite um nome válido para a tarefa!" });
      return;
    }

    if (await verifyEmptyDescription(description)) {
      res.status(400).json({ message: "Digite uma descrição válida!" });
      return;
    }

    if (await verifyTaskExistence(name)) {
      res.status(400).json({
        message:
          "Já existe uma tarefa com este nome e ainda não foi finalizada!",
      });
      return;
    }

    const updatedTask = await service.execute({ id, name, description });

    return res
      .status(200)
      .json({ message: "Task atualizada com sucesso!", updatedTask });
  };
}

import { Request, Response } from "express";
import { GetAllTasksService } from "../services/GetAllTasksServices";
import { CreateNewTaskService } from "../services/CreateNewTaskService";
import { Task } from "../entities/Task";

export default class Tasks {
  getAll = async (req: Request, res: Response) => {
    const service = new GetAllTasksService();

    const result = await service.execute();

    return res.status(200).json({ message: result });
  };

  createNew = async (req: Request, res: Response) => {
    const { name, description }: Task = req.body;
    const service = new CreateNewTaskService();

    if (name.length < 1) {
      res.status(400).json({
        message: "Insira um nome válido",
      });
      return;
    }

    if (description.length < 1) {
      res.status(400).json({
        message: "Insira uma descrição válida",
      });
      return;
    }

    const result = { name, description };

    await service.execute(result);
  };
}

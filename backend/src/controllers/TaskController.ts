import { Request, Response } from "express";
import { GetAllTasksService } from "../services/GetAllTasksServices";
import { CreateNewTaskService } from "../services/CreateNewTaskService";
import { TaskValidator } from "../validator/TaskValidator";
import { Task } from "../entities/Task";

export default class Tasks {
  getAll = async (req: Request, res: Response) => {
    const service = new GetAllTasksService();

    const result = await service.execute();

    return res.status(200).json({ message: result });
  };

  newTask = async (req: Request, res: Response) => {
    const { name, description, done }: Task = req.body;
    const service = new CreateNewTaskService();

    if (name.length < 1) {
      res.status(400).json({ message: "Insira um nome válido para a tarefa!" });
      return;
    }

    if (description.length < 1) {
      res.status(400).json({ message: "Insira uma breve descrição!" });
      return;
    }

    if (await TaskValidator(name)) {
      res
        .status(400)
        .json({
          message:
            "Uma tarefa com este nome já foi cadastrada e ainda não foi finalizada.",
        });
      return;
    }

    const createdTask = await service.execute({ name, description });

    return res
      .status(201)
      .json({ message: "Tarefa criado com sucesso!", createdTask });
  };
}

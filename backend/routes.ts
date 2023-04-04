import { Router } from "express";
import TaskController from "./src/controllers/TaskController";

const routes = Router();

routes.get("/all-tasks", new TaskController().getAll);
routes.post("/new-task", new TaskController().newTask);
routes.put("/update-task/:id", new TaskController().updateTask);

export default routes;

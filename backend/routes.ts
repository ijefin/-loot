import { Router } from "express";
import TaskController from "./src/controllers/TaskController";
import cors from "cors";

const routes = Router();

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

//allowing cors origin
routes.use(cors(corsOptions));

routes.get("/all-tasks", new TaskController().getAll);
routes.post("/new-task", new TaskController().newTask);
routes.put("/update-task/:id", new TaskController().updateTask);
routes.delete("/delete-task/:id", new TaskController().deleteTask);

export default routes;

import { Router } from "express";
import { authMiddleware } from "./src/middlewares/authMiddleware";
import LoginController from "./src/controllers/LoginController";
import RegisterController from "./src/controllers/UserRegistrationController";
import TransactionController from "./src/controllers/TransactionsController";
import cors from "cors";

const routes = Router(); 

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

//allowing cors origin
routes.use(cors(corsOptions));

routes.post("/register", new RegisterController().create);
routes.post("/login", new LoginController().login);
routes.put("/update-password", new RegisterController().update);

//Every route below this method will require authentication.
routes.use(authMiddleware);

routes.get("/profile", new LoginController().profile);
routes.post("/new-transaction", new TransactionController().create);

export default routes;

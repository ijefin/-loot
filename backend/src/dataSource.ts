import "dotenv/config";
import { DataSource } from "typeorm";
import { Task } from "./entities/Task";

const port = process.env.DB_PORT as number | undefined;

const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Task],
  migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
});

export default appDataSource;

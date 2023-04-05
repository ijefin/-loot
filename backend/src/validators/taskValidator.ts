import { Response } from "express";
import { TaskManager } from "../repositories/taskRepository";

const taskManager = new TaskManager();

export const verifyTaskExistence = async (name: string) => {
  const getOne = await taskManager.getUnfinishedByName(name);

  return getOne;
};

export const verifyEmptyName = async (name: string) => {
  const nameIsValid = name.length < 1;

  return nameIsValid;
};

export const verifyEmptyDescription = async (description: string) => {
  const descriptionIsvalid = description.length < 1;

  return descriptionIsvalid;
};

import { Router } from "express";
import {
  countAllUsers,
  createUser,
  findAllUsers,
  findUserById,
  findUserDelete,
} from "../controllers/UsersController";

const usersRouter = Router();

usersRouter.get("/", findAllUsers);
usersRouter.get("/count", countAllUsers);
usersRouter.get("/:_id", findUserById);
usersRouter.post("/", createUser);
usersRouter.delete("/:_id", findUserDelete);

export default usersRouter;

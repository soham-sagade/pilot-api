import express from "express";
import { UserController } from "../controllers/userController";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/login", userController.login);
userRouter.get("/sign-up", userController.signUp);

export { userRouter };

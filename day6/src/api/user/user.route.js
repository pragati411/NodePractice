import { Router } from "express";
import { getUser, loginUser } from "./user.controller.js";
import { isAuthorised } from "./user.middleware.js";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.get("/", isAuthorised, getUser);

export default userRouter;
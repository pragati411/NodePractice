import { Router } from "express";

import { getAllUsers , createNewUser} from "./user.controller";

const orderRouter = Router();

orderRouter.get("/", getAllUsers);
orderRouter.post("/", createNewUser);

export default orderRouter;
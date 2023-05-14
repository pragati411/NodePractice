import { Router } from "express";
import { getAllOrders, createNewOrder } from "./order.controller.js";

const orderRouter = Router();

orderRouter.get("/", getAllOrders);
orderRouter.post("/", createNewOrder);

export default orderRouter;
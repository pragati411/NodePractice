import Express, { json } from "express";
import orderRouter from "./api/order/order.route.js";
import productRouter from "./api/product/product.route.js";
import { PORT } from "./config.js";

const app = Express();

app.use(json());
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
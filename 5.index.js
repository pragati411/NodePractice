const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const queryCheckMiddleware = (req, res, next) => {
  console.log("Inside Middleware");
  if (!req.query.name) {
    res.status(400).json({ message: "Please provide name" });
  }

  if (req.query.name !== "saurav") {
    res.status(401).json({ message: "You're not allowed" });
  } else {
    //next();
  }
};

const businessLogic = (req, res, next) => {
  console.log("Inside the main logic");
  res.send(`Welcome to the bank Mr ${req.query.name}`);
};

app.get("/", queryCheckMiddleware, businessLogic);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

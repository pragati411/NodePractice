import { signToken, verifyToken } from "../../services/jwt/jwt.provider.js";

const USER_NAME = "xdankit";
const PASSWORD = "qwerty";

export const loginUser = (req, res) => {
  const { userName, password } = req.body;

  if (userName !== USER_NAME || password !== PASSWORD) {
    return res
      .status(401)
      .json({ message: "Please enter a valid credentials" });
  }

  const token = signToken({ userName });
  res.send({ token });
};

export const getUser = (req, res) => {
  const { authorization } = req.headers;

  const isValidToken = verifyToken(authorization);
  if (!isValidToken) {
    return res
      .status(401)
      .json({ message: "You're not allowed to access this page" });
  }

  res.send({ data: isValidToken });
};
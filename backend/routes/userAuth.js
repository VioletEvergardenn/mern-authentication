import express from "express";
import { User } from "../models/Users.js";
const userAuthRouter = express.Router();
import bcrypt from "bcrypt";

userAuthRouter.post("/signup", async function (req, res) {
  const { email, password, firstname, lastname } = req.body;
  const user = await User.find({ email });
  console.log(user);
  if (user) {
    return res.json({ message: "User already existed" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashPassword,
    firstname,
    lastname,
  });

  await newUser.save();
  return res.json({ message: "new user created" });
});

export { userAuthRouter };

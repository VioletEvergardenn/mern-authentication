import express from "express";
import { User } from "../models/Users";
const router = express.Router();
import bcrypt from "bcrypt";

router.post("/signup", async function (req, res) {
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

export { router as userAuthRouter };

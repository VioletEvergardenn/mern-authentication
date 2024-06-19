import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
});

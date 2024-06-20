import express from "express";
import { userAuthRouter } from "./routes/userAuth.js";
import { connectDB } from "./db.js";
const app = express();
app.use("/auth", userAuthRouter);
app.use(express.json());
connectDB();

app.listen(process.env.PORT, () => console.log("server is running"));

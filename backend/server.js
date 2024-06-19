import express from "express";
import { userAuthRouter } from "./routes/userAuth";
const app = express();
app.use("/auth", userAuthRouter);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://iadore2code:test123@experiment.mk4zxt1.mongodb.net/mern-authentication-test"
);

app.listen(process.env.PORT, () => console.log("server is running"));

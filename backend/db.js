import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function connectDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB);
    console.log(`Connected to database ${connection.name}`);
    // console.log(connection);
  } catch (error) {
    console.log("failed to connect to mongodb");
  }
}

export { connectDB };

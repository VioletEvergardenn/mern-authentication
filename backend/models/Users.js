import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
    unique: true,
  },
  lastname: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", UserSchema, "user");

export { UserModel as User };

import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isActive: {type: Boolean, required: true},
  },
  { timestamps: true }
);

const UsersModel = mongoose.model("user", usersSchema);
export default UsersModel;
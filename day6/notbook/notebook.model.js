import mongoose from "mongoose";
const { Schema } = mongoose;

const noteBookSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isActive: {type: Boolean, required: true},
    tags:[{type: String, required: false}],
    authorId: {type: Schema.Types.ObjectId, required: true},
  },
  { timestamps: true }
);

const NotebookModel = mongoose.model("user", noteBookSchema);
export default NotebookModel;
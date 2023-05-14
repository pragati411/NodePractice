import mongoose from "mongoose";
const { Schema } = mongoose;

const notesSchema = new Schema(
  {
    
  },
  { timestamps: true }
);

const NotesModel = mongoose.model("user", notesSchema);
export default NotesModel;
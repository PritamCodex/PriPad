import mongoose from "mongoose";

// Schema Creation
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true // Correct spelling and enables createdAt, updatedAt
});

// Model Creation
const Note = mongoose.model("Note", noteSchema);

export default Note;

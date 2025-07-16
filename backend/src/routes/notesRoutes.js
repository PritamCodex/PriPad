import express from "express"
import {createNote,updateNote,deleteNote,getAllNotes,getNoteByid} from "../controllers/notescontroller.js"
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteByid);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;

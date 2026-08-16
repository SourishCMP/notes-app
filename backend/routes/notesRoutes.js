import express from "express"
import { createNote, deleteNote, getAllNotes,getNotebyId, updateNote } from "../controllers/notesCOntroller.js";

const router=express.Router();

export default router;

router.get("/",getAllNotes);
router.get("/:id",getNotebyId);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);
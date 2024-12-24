import express from "express";
import { createBook, updateBookCover} from "../controllers/bookController";
import upload from "../middleware/upload";


const router = express.Router();

router.post("/books", createBook);

router.patch("/books/cover-image/:id", upload.single("coverImage"), updateBookCover);


export default router;

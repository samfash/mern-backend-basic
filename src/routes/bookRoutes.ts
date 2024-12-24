import express from "express";
import { createBook,
    updateBookCover,
    getAllBooks, 
    getBookById, 
    updateBook, 
    deleteBook,} from "../controllers/bookController";
import upload from "../middleware/upload";


const router = express.Router();

router.post("/books", createBook);

router.patch("/books/cover-image/:id", upload.single("coverImage"), updateBookCover);

router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

router.put("/books/:id", updateBook)

router.delete("/books/:id", deleteBook);

export default router;

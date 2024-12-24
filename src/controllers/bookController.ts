import { Request, Response } from "express";
import Book from "../models/bookModel";


export const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, author, publishedDate, ISBN } = req.body;

    if (!title || !author || !publishedDate || !ISBN) {
       res.status(400).json({ error: "All fields are required" });
       return;
    }

    const book = await Book.create({ title, author, publishedDate, ISBN });
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateBookCover = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
  
      // Check if a file was uploaded
      if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }
  
      // Find the book by ID
      const book = await Book.findById(id);
      if (!book) {
        res.status(404).json({ error: "Book not found" });
        return;
      }
  
      // Update the cover image
      book.coverImage = req.file.path;
      await book.save();
  
      res.status(200).json({ success: true, data: book });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };

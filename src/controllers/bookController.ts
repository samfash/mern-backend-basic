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

export const getAllBooks = async (req: Request, res: Response): Promise<void> => {
    try {
      const books = await Book.find(); // Fetch all books from the database
      res.status(200).json({
        success: true,
        data: books,
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };

export const getBookById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
  
      // Find book by ID
      const book = await Book.findById(id);
  
      // Handle case where book is not found
      if (!book) {
        res.status(404).json({ error: "Book not found" });
        return;
      }
  
      res.status(200).json({
        success: true,
        data: book,
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };

export const updateBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { title, author, publishedDate, ISBN } = req.body;
  
      // Find the book by ID and update
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, publishedDate, ISBN },
        { new: true, runValidators: true }
      );
  
      // Handle case where book is not found
      if (!updatedBook) {
        res.status(404).json({ error: "Book not found" });
        return;
      }
  
      res.status(200).json({
        success: true,
        data: updatedBook,
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };
  
export const deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
  
      // Find and delete the book by ID
      const deletedBook = await Book.findByIdAndDelete(id);
  
      // Handle case where book is not found
      if (!deletedBook) {
        res.status(404).json({ error: "Book not found" });
        return;
      }
  
      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: deletedBook,
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };
  
  
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

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import bookRoutes from "./routes/bookRoutes";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", bookRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use((err: any, req: any, res: any, next: any) => {
  // Check if the error is from Multer
  if (err instanceof Error && err.message === "Only image files are allowed!") {
    return res.status(500).json({ error: err.message });
  }

  // Generic error handling
  if (err instanceof Error) {
    return res.status(500).json({ error: err.message });
  }

  next(err); // Pass to the default error handler
});


if (process.env.NODE_ENV !== "test") {
  
  connectDB();

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
}

// for testing
export default app;
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http"
import app from "../index";

dotenv.config();
let server: http.Server;

beforeAll(async () => {
    if(!mongoose.connection.readyState){
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/test-books");
    }

    server = app.listen(4000);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); // Clear the database after tests
  await mongoose.connection.close();

  server.close(); // Close the server after tests
});

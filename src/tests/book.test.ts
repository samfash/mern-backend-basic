import request from "supertest";
import app from "../index"; // Ensure this points to your Express app
import mongoose from "mongoose";

describe("Create Book Endpoint", () => {
  beforeAll(async () => {
    // Ensure database connection
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/test");
  });

  afterAll(async () => {
    // Clean up
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  it("should create a new book", async () => {
    const response = await request(app)
      .post("/api/books")
      .send({
        title: "Automated Test Book",
        author: "Test Author",
        publishedDate: "2024-01-01",
        ISBN: "987-654-321"
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty("_id");
    expect(response.body.data.title).toBe("Automated Test Book");
  });
});

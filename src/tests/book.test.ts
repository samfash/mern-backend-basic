import request from "supertest";
import app from "../index"; // Ensure this points to your Express app

describe("Book API", () => {
  let bookId: string;

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

    bookId = response.body.data._id
  });

  it("should return all books data", async () =>{
    const responce = await request(app).get("/api/books")

    expect(responce.status).toBe(200);
    expect(responce.body.success).toBe(true);
    expect(responce.body.data.length).toBeGreaterThan(0);
  })

  it("should fetch a single book by ID", async () => {
    const responce = await request(app).get(`/api/books/${bookId}`);
    expect(responce.status).toBe(200);
    expect(responce.body.success).toBe(true);
    expect(responce.body.data._id).toBe(bookId);
  });

  it("should update a book", async () => {
    const responce = await request(app)
      .put(`/api/books/${bookId}`)
      .send({
        title: "Updated Test Book",
        author: "Updated Test Author",
        publishedDate: "2025-01-01",
        ISBN: "444-555-666",
      });
    expect(responce.status).toBe(200);
    expect(responce.body.success).toBe(true);
    expect(responce.body.data.title).toBe("Updated Test Book");
  });

  it("should delete a book", async () => {
    const responce = await request(app).delete(`/api/books/${bookId}`);
    expect(responce.status).toBe(200);
    expect(responce.body.success).toBe(true);

    const checkRes = await request(app).get(`/api/books/${bookId}`);
    expect(checkRes.status).toBe(404);
  });
});

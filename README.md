# Books Management API

This project is a simple CRUD (Create, Read, Update, Delete) API for managing a "Books" collection. Built using Node.js, Express.js, TypeScript, and MongoDB, the API provides endpoints for creating, updating, fetching, and deleting books.

---

## **Features**
- Create a book
- Update a book's details
- Update a book's cover picture
- Get all books
- Get a single book by ID
- Delete a book

---

## **Tech Stack**
- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB
- **Language**: TypeScript
- **Testing**: Jest, Supertest

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/samfash/mern-backend-basic.git
cd mer-backend-setup
```

### **2. install Dependencies**
```bash
npm install
```
### **3. set up environmental variables**
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/books
```
### **4. run the application**
- **for development**
```bash
npm run dev
```
- **for production**
```bash
npm run build
```
## **Available EndPoints**
### **Enpoints for Create Book (POST /api/books)
- **URL**: /api/books
- **HTTP Method**: POST
- **Description**: Adds a new book to the collection
- **Request Body**: {
                        "title": "Sample Book",
                        "author": "John Doe",
                        "publishedDate": "2024-01-01",
                        "ISBN": "123-456-789"
                    }
- **Responce**:{
                "success": true,
                "data": {
                    "_id": "64abc12345def67890gh1234",
                    "title": "Sample Book",
                    "author": "John Doe",
                    "publishedDate": "2024-01-01T00:00:00.000Z",
                    "ISBN": "123-456-789",
                    "coverImage": null,
                    "__v": 0
                    }
                }
-**Error**:400 Bad Request (missing fields):
            {
            "error": "All fields are required"
            }

### **Enpoints for Update Book Cover Picture (PATCH /api/books/cover-image/:id)
- **URL**: /api/books/cover-image/:id
- **HTTP Method**: PATCH
- **Description**: Updates the book's cover image.
- **Request body**: Form-data - key: coverImage(File)
- **Responce**: {{
                    "success": true,
                    "data": {
                        "_id": "64abc12345def67890gh1234",
                        "title": "Sample Book",
                        "author": "John Doe",
                        "publishedDate": "2024-01-01T00:00:00.000Z",
                        "ISBN": "123-456-789",
                        "coverImage": "uploads/1735006951759-bike_pic.jpg",
                        "__v": 0
                    }
                    }
                    }
### **Enpoints for Get All Books (GET /api/books)
- **URL**: /api/books
- **HTTP Method**: GET
- **Description**: Retrieves all books in the database
- **Responce**: {"success": true,
                        "data": [
                            {
                            "_id": "64abc12345def67890gh1234",
                            "title": "Sample Book",
                            "author": "John Doe",
                            "publishedDate": "2024-01-01T00:00:00.000Z",
                            "ISBN": "123-456-789",
                            "coverImage": "uploads/1735006951759-bike_pic.jpg",
                            "__v": 0
                            }
                        ]
                    }
### **Enpoints for Get Single Book (GET /api/books/:id)
- **URL**: /api/books/:id
- **HTTP Method**: GET
- **Description**: Retrieves a single book by ID
- **Responce**: {"success": true,
                        "data": [
                            {
                            "_id": "64abc12345def67890gh1234",
                            "title": "Sample Book",
                            "author": "John Doe",
                            "publishedDate": "2024-01-01T00:00:00.000Z",
                            "ISBN": "123-456-789",
                            "coverImage": "uploads/1735006951759-bike_pic.jpg",
                            "__v": 0
                            }
                        ]
                    }
### **Enpoints for Update a Book (PUT /api/books/:id)
- **URL**: /api/books/:id
- **HTTP Method**: PUT
- **Description**: Updates a book's details
- **Request Body**: {"title": "Updated Title",
                     "author": "Updated Author",
                     "publishedDate": "2025-01-01",
                     "ISBN": "987-654-321"
                    }
- **Responce**:{
                "success": true,
                "data": {
                    "_id": "64abc12345def67890gh1234",
                    "title": "Updated Title",
                    "author": "Updated Author",
                    "publishedDate": "2025-01-01T00:00:00.000Z",
                    "ISBN": "987-654-321",
                    "coverImage": "uploads/1735006951759-bike_pic.jpg",
                    "__v": 0
                }
                }
### **Enpoints for Delete a Book (DELETE /api/books/:id)**
- **URL**: /api/books/:id
- **HTTP Method**: DELETE
- **Description**: Deletes a book by ID
- **Responce**: {"success": true,
                    "message": "Book deleted successfully",
                    "data": {
                        "_id": "64abc12345def67890gh1234",
                        "title": "Sample Book",
                        "author": "John Doe",
                        "publishedDate": "2024-01-01T00:00:00.000Z",
                        "ISBN": "123-456-789",
                        "coverImage": "uploads/1735006951759-bike_pic.jpg",
                        "__v": 0
                        }
                    }


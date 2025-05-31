# Book Store REST API

This repository contains a RESTful API developed using Node.js, Express.js, and MongoDB for managing a simple book store. The application supports basic CRUD operations and is designed for backend development practice and educational purposes.

---

## Endpoints

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/api/books`     | Retrieve all books  |
| POST   | `/api/books`     | Add a new book      |
| PUT    | `/api/books/:id` | Update an existing book |
| DELETE | `/api/books/:id` | Delete a book       |

---

## Postman Collection

[Click here to view in Postman](https://www.postman.com/piyushbhagwat/workspace/bookapi/collection/24473235-35d7ac6b-6b53-420d-b1ea-c0617068a58c?action=share&creator=24473235)

---

## Data Model

The book schema consists of the following fields:

```javascrip
{
  title: String,          // Required
  author: String,         // Required
  price: Number,          // Required
  publishedDate: Date     // Optional
}
```
---

## Technologies Used

* **Node.js** – JavaScript runtime environment
* **Express.js** – Web framework for Node.js
* **MongoDB (MongoDB Atlas)** – NoSQL database for storing book records
* **Mongoose** – ODM library for MongoDB and Node.js
* **Postman** – API testing and documentation

---

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/Piyush-Bhagwat/bookAPI.git
   ```

2. Navigate to the project directory:

   ```
   cd bookAPI
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file and add your MongoDB URI:

   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
   ```

5. Start the server:

   ```
   npm start
   ```

---

## Author

**Piyush**
MCA Student | MERN Stack Developer
*Readme generated with assistance from ChatGPT*

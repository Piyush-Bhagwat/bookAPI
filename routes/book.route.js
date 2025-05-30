const { Router } = require("express");
const book = require("../models/book.model");
const {
    addBook,
    getBooks,
    editBook,
    deleteBook,
} = require("../controllers/book.cont");

const bookRouter = Router();

bookRouter.get("/", getBooks);

bookRouter.post("/", addBook);

bookRouter.put("/:id", editBook);

bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter;

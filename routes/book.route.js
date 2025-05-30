const { Router } = require("express");
const book = require("../models/book.model");
const { addBook, getBooks, editBook } = require("../controllers/book.cont");

const bookRouter = Router();

bookRouter.get("/", getBooks);

bookRouter.post("/", addBook);

bookRouter.put("/", editBook);

// bookRouter.delete("/");

module.exports = bookRouter;

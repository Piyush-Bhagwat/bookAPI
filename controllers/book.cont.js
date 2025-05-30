const book = require("../models/book.model");

const getBooks = async (req, res) => {
    try {
        const books = await book.find();
        res.status(200).json(books);
    } catch (e) {
        res.status(502).send("error geting books");
    }
};

const addBook = async (req, res) => {
    const { title, author, publishedDate, price } = req.body;

    const bookObj = {
        title,
        author,
        publishedDate,
        price,
    };
    console.log(bookObj);

    if (!title || !author || !price) {
        return res.status(502).send("Enough info not provided");
    }

    try {
        const newBook = await book.create(bookObj);
        res.status(202).json(newBook);
    } catch (e) {
        res.status(500).send("cant save book");
        console.log(e);
    }
};

const editBook = async (req, res) => {};

const deleteBook = async (req, res) => {};

module.exports = {
    getBooks,
    addBook,
    editBook,
    deleteBook,
};

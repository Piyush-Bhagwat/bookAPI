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
        return res.status(400).send("Enough info not provided");
    }

    try {
        const newBook = await book.create(bookObj);
        res.status(201).json(newBook);
    } catch (e) {
        res.status(500).send("cant save book");
        console.log(e);
    }
};

const editBook = async (req, res) => {
    const { id } = req.params;
    console.log("params", req.params.id);

    const { title, author, publishedDate, price } = req.body;
    if (!id) return res.status(400).send("No book id provided");

    try {
        const newBook = { title, author, publishedDate, price };
        const editedBook = await book.findByIdAndUpdate(id, newBook, {
            new: true,
        });

        if (editedBook) {
            return res.status(200).json(editedBook);
        } else {
            return res.status(404).send("No book was found");
        }
    } catch (e) {
        console.log(e);
        return res.status(500).send("error occured");
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        await book.findByIdAndDelete(id);
        return res.status(200).send("deleted");
    } catch (e) {
        console.log(e);
        return res.status(500).send("Some error occured");
    }
};

module.exports = {
    getBooks,
    addBook,
    editBook,
    deleteBook,
};

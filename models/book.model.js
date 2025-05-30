const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    publishedDate: { type: Date },
});

const book = model("Book", bookSchema);

module.exports = book;

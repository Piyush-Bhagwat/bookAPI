const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    price: { type: Number, require: true },
    publishedDate: { type: Number },
});

const book = model("Book", bookSchema);

module.exports = book;

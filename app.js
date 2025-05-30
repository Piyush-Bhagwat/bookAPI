//this includs express app logic

const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/book.route");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/book", bookRouter);

app.get("/", function (req, res) {
    res.send("Server running...");
});

module.exports = app;

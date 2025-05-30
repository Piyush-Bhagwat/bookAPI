require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGO_URI;
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("DB connected");
    } catch (e) {
        console.log("DB cant connect", e);
    }
};

module.exports = connectDB;

const mongoose = require("mongoose");
const url =
    "mongodb+srv://piyush:wkpQq8SHSZbvM363@cluster0.bxfreba.mongodb.net/BlogDB?retryWrites=true&w=majority&appName=Cluster0";
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

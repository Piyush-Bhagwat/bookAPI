const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3009;

app.listen(PORT, async () => {
    console.log("server started at: ", PORT);
    console.log("Trying to connect DB...");
    await connectDB();
});

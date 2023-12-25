const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const recordsRoute = require("./routes/records")

// db connection url
const DATABASE_URL  = "mongodb://127.0.0.1:27017/ocr";
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/records", recordsRoute);

db.on("error", (err) => console.log(err));
db.on("open", () => console.log("Database Connected..."));

// server listening on
const PORT = 3002;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

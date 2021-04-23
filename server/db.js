let mongoose = require("mongoose");
let url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/emotion";
let db = mongoose.connect(url);

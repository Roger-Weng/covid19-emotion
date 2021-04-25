let mongoose = require("mongoose");
let url = process.env.MONGO_URI;
let db = mongoose.connect(url);

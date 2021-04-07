let mongoose = require("mongoose");
let url = process.env.MONGODB_URI;
let db = mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});


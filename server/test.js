let mongoose = require("mongoose");
let url = "mongodb+srv://Roger1107:xEvveb-kytvaq-tybca6@cluster0.3v11r.mongodb.net/emotion?retryWrites=true&w=majority";
let db = mongoose.connect(url);
require("./schema.js");
var f=mongoose.model('forum');
f.findById("60de10b48659182bf848eaf3", function(error, result) {
    result.comments.push({s:1,b:2});
    result.save();
})

let mongoose = require("mongoose");
let url = "mongodb+srv://Roger1107:xEvveb-kytvaq-tybca6@cluster0.3v11r.mongodb.net/emotion?retryWrites=true&w=majority";
let db = mongoose.connect(url);
require("./schema.js");
var comment=mongoose.model('comment');
comment.find({artical_id:4},
    function(err,doc){
        console.log(doc);
    }

    )

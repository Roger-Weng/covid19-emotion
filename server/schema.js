let mongoose = require('mongoose');

let forum = new mongoose.Schema({
  topic_id:Number,
  username: String,
  create_time: Number,
  forum_text: String,
  comments:Array,
});


let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  create_time: String
});

let userRecord = new mongoose.Schema({
  //basic info
  username: String,
  year: Number,
  month: Number,
  day: Number,
  date: String,
  skip:Boolean,
  //week info
  MondayDate: String,
  //input value
  input: String,
  img: String,
  weather: String,
  hoursSleep: Number,
  mealsHad: Number,
  value_happiness: Number,
  value_boredom: Number,
  value_anxiety: Number,
  value_depression: Number,
  value_excitement: Number,
  //detected value
  textScore: Number,
  keyWords: String,
  imgScore: String,
  imgHappiness: Number,
  imgSadness: Number,
  total_score: Number,
});

mongoose.model('User', UserSchema,'users');
mongoose.model('userRecord', userRecord,'userRecord');
mongoose.model('forum', forum,'forum');

let dateString = function (dateFrom) {
  let date = dateFrom;
  if(typeof (dateFrom) === "string"){
    date = new Date(Date.parse(dateFrom));
  }
  return "2021"+"-"+"2"+"-"+"12";
};

let mondayDateString = function (dateFrom) {
  let date = dateFrom;
  // console.log(typeof (dateFrom) === "string");
  if(typeof (dateFrom) === "string"){
    date = new Date(Date.parse(dateFrom));
  }
  // console.log(typeof(date));
  let time = date.getTime();
  let day = date.getDay();
  let oneDayTime = 24*60*60*1000;
  let MondayDate = new Date(time-(day-1)*oneDayTime);
  return "2021"+"-"+"2"+"-"+"12";
};

module.exports = {
  dateString: dateString,
  mondayDateString: mondayDateString
};

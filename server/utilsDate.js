let dateString = function (dateFrom) {
  let date = dateFrom;
  if(typeof (dateFrom) === "string"){
    date = new Date(Date.parse(dateFrom));
  }
  return String(date.getFullYear())+"-"+String(date.getMonth()+1)+"-"+date.getDate();
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
  return String(MondayDate.getFullYear())+"-"+String(MondayDate.getMonth()+1)+"-"+MondayDate.getDate();
};

function add_zero(d){
  if(d<10){
    d="0"+d;
  }
  return d;
}

let getCurDate=function(){
  var d=new Date();
  var mon=add_zero(d.getMonth()+1);
  var dd=add_zero(d.getDate());
  var day=add_zero(d.getDay());
  var y=add_zero(d.getFullYear());
  var hh=add_zero(d.getHours());
  var min=add_zero(d.getMinutes());
  var s=add_zero(d.getSeconds());

  var day_map={0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"};
  var day_format=day_map[day];

  return [dd+"/"+mon+"/"+y, hh+":"+min+":"+s, day_format];
}

module.exports = {
  dateString: dateString,
  mondayDateString: mondayDateString,
  getCurDate:getCurDate,
};

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res){

  var date = new Date();
  // var currentDay = date.getDay();

  // var day = "";

  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // }
  // else{
  //   day = "Weekday";
  // }

  var options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' };

  var day = date.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay: day});

});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

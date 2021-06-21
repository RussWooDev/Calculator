//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//need to write this everytime you use bodyparser

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2); // added Number to make it a number, if not it will be a string

  var result = num1 + num2;


res.send("The result is " + result);
});

app.listen(3000, function(){
  console.log("server is up");
});

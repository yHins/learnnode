var express = require("express");
var path = require("path");
var router = require("./router");
// var template = require('express-art-template');

var app = express();

app.engine("html", require("express-art-template"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

// app.get("/", (req, res) => {
//   res.send("首页");
// });

app.use(router);

app.listen("3000", function() {
  console.log("请访问http://127.0.0.1:3000");
});

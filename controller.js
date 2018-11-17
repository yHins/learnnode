var mysql = require("mysql");
var path = require("path");
var dbconfig = require("./dbconfig");

var connection = mysql.createConnection(dbconfig);
connection.connect(function(err) {
  if (err) {
    throw err;
  }
});

const controller = {};

controller.index = function(req, res) {
  res.render("index.html", { name: "zhangsan" });
};

module.exports = controller;

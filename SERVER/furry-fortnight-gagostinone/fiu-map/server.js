var express = require("express");
var cors = require("cors")
var mysql = require("mysql");
var app = express();

app.use(cors());


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rb123",
  database: "furry",
  port: "3306"
});

//Category
app.get("/categories", function(req, res) {
  connection.query("SELECT CategoryName FROM Category", [1, 2], function(err,rows,fields)
   {
    console.log("Connection result error " + err);
    //console.log("no of records is " + rows.length);
    //response.writeHead(200, { "Content-Type": "application/json" });
    //response.end(JSON.stringify(rows));
    //response.end();
    response = { Categories: rows };
    res.send(response);
  });
  //console.log(response);
});

//Location
app.get("/location", function(req, res) {
  connection.query("SELECT LocationName FROM eventlocation", [1, 2], function(err,rows,fields)
   {
    console.log("Connection result error " + err);
    //console.log("no of records is " + rows.length);
    //response.writeHead(200, { "Content-Type": "application/json" });
    //response.end(JSON.stringify(rows));
    //response.end();
    response = { Categories: rows };
    res.send(response);
  });
  //console.log(response);
});

//organization
app.get("/organization", function(req, res) {
  connection.query("SELECT FName FROM furry.usertable where Organization = 1;", [1, 2], function(err,rows,fields)
   {
    console.log("Connection result error " + err);
    //console.log("no of records is " + rows.length);
    //response.writeHead(200, { "Content-Type": "application/json" });
    //response.end(JSON.stringify(rows));
    //response.end();
    response = { Categories: rows };
    res.send(response);
  });
  //console.log(response);
});

var server = app.listen(8084, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});


var express = require("express");
var cors = require("cors")
var mysql = require("mysql");
var app = express();
var bodyParser = require("body-parser");

app.use(cors());

// assume that if a request contains data it is encoded as JSON
app.use(bodyParser.urlencoded({extended: true}));

// decode request data
app.use(bodyParser.json());


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rb123",
  database: "furry",
  port: "3306"
});

connection.connect();

//Category
app.get("/categories", function(req, res) {
  connection.query("SELECT CategoryName FROM Category", [1, 2], function(err,rows,fields)
   {
    console.log("Connection result error " + err);
    //console.log("no of records is " + rows.length);
    //response.writeHead(200, { "Content-Type": "application/json" });
    //response.end
    //(JSON.stringify(rows));
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
    response = { Locations: rows };
    res.send(response);
  });
  //console.log(response);
});


//Events
app.get("/events", function(req, res) {
  connection.query("SELECT e.EventID as Id,e.EventName as Name,u.Email as user,case when u.Organization = 0 then concat(u.FName,' ',u.LName) when u.Organization = 1 then u.FName else '' end as Organization, c.CategoryName as Category,l.LocationCode as Location, '3' as Attending,e.Capacity,e.eventTime as StartTime, e.EndTime, DATE_FORMAT(e.EventDate,'%Y-%m-%d') as Date, e.EventDescription FROM furry.eventinfo e left join category c on e.CategoryID=c.CategoryID left join eventlocation l on e.LocationID=l.LocationID left join usertable u on e.CreatedBy=u.UserId;", [1, 2], function(err,rows,fields)
   {
    console.log("Connection result error " + err);
    //console.log("no of records is " + rows.length);
    //response.writeHead(200, { "Content-Type": "application/json" });
    //response.end(JSON.stringify(rows));
    //response.end();
    response = { EventList: rows };
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
    response = { Organizations: rows };
    res.send(response);
  });
  //console.log(response);
});


app.post("/create-event", function(req, res) {

  console.log(req.body);
  var newEvent = req.body;

  var NameOfEvent = newEvent.Name ;
  var username = newEvent.User;
  var OrganizationName = newEvent.Organization;
  var CategoryName = newEvent.Category;
  var LocationName = newEvent.Location;
  var CapacityNum = newEvent.Capacity;
  var startingTime = newEvent.StartTime;
  var endingTime = newEvent.EndTime;
  var eventDate = newEvent.Date; 
  var eventDescription = newEvent.Comment;

  
    var sql = "INSERT INTO eventinfo (EventName, userName, Organization, CategoryName, LocantionName, Capacity, EventTime, EndTime, EventDate, EventDescription) VALUES ('"+NameOfEvent+"','"+username+"','"+OrganizationName+"','"+CategoryName+"','"+LocationName+"',' "+CapacityNum+"','"+startingTime+"','"+endingTime+"','"+eventDate+"','"+eventDescription+"');";
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err)
        return res.status(500).send({
          code: 500,
          error: err,
          message: "Something went wrong creating an event."
        })
      };
      console.log("1 record inserted");

    });
  // Create the query and run it;
    res.send(result);
    
  });
 
  // return res.status(200).send({});

  //return res.status(200).json({
  //  message: "Posting to create a new event worked."


  var server = app.listen(8084, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});


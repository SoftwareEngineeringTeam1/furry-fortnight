/* var mssql = require("mssql"); 
var dbConfig = {
    user: 'ROSAMARIA-LENOV\\rosam:1433',
    password: '',
    server: 'ROSAMARIA-LENOV\\RB',
    database: 'furry'
};

 var connection = mssql.connect(dbConfig, function (err) {
     if (err) console.log(err); 
 });

 module.exports = connection; 

// // app.js 
 var db = require("db"); 
 var express = require("express"); 
 var app = express();

 app.get('/', function (req, res, next) {
     const sql = require('mssql')

     async () => {
     try {
         await sql.connect('mssql://ROSAMARIA-LENOV\\rosam@localhost:1433/fury')
         const result = await sql.query`select * from category`
         console.dir(result)
         return result
     } catch (err) {
         console.log
         // ... error checks
     }
 }    
 }); 

 var server = app.listen(5000, function () {
   console.log('Server is running..'); 
});

 */

var sql = require('mssql/msnodesqlv8');
var dbConfig = {
    driver: "msnodesqlv8",
    server: "DESKTOP-7O0HT92\\MSSQLSERVER01",
    database: "furry",
    options: {
    trustedConnection: true,
    useUTC: true
  }
}
var conn = new sql.ConnectionPool(dbConfig);
conn.connect(function(err){
    if (err) console.log(err);
    conn.query("Select CategoryName from Category", function(err,result,fields){
        if(err) console.log(err);
        else console.log(result);
    });
});



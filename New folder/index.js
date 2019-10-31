var mssql = require("mssql"); 
var dbConfig = {
    user: 'ROSAMARIA-LENOV\\rosam:1433',
    password: '',
    server: 'ROSAMARIA-LENOV\\RB',
    database: 'furry'
};

var connection = mssql.connect(dbConfig, function (err) {
    if (err)
        throw err; 
});

module.exports = connection; 

// app.js 
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
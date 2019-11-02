var sql = require('mssql/msnodesqlv8');
var dbConfig = {
    driver: "msnodesqlv8",
    server: "DESKTOP-7O0HT92\\MSSQLSERVER01",
    database: "ConnectionTest",
    options: {
    trustedConnection: true,
    useUTC: true
  }
}
var conn = new sql.ConnectionPool(dbConfig);

/* conn.connect(function(err) {
  if (err) console.log(err);
  else console.log("Connected!");
  conn.close();
}); */

conn.connect(function(err) {
    if (err) console.log(err);
    else console.log("Connected!");
    conn.query("CREATE DATABASE furry", function (err, result) {
      if (err)  console.log(err);
      else console.log("Database created");
    });
});
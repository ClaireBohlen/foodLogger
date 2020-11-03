const mysql = require("mysql");

//setting up the mySql connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "112392Cb!",
    database: "burger_db"
  });
  
//Making the connection

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;

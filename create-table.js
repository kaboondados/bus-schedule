const rl = require('readline');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydata"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE buses (busid INT AUTO_INCREMENT PRIMARY KEY, num INT, origin VARCHAR(255), destination VARCHAR(255), departure TIME, arrival TIME)";  
  var sql2 = "CREATE TABLE students (studentid INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), origin VARCHAR(255), arrival TIME)";
  //var sql2 = "CREATE TABLE students (student-id INT, first-name VARCHAR(255), last-name VARCHAR(255), patronym VARCHAR(255), town VARCHAR(255), departure TIME)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table1 created");
  });
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("Table2 created");
  });
});
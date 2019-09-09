var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydata"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT students.studentid, students.firstname, students.lastname, students.origin, students.arrival, buses.busid, buses.num FROM students LEFT JOIN buses ON students.arrival = buses.arrival AND students.origin = buses.origin WHERE NOT students.origin = 'Moscow' ORDER BY students.studentid";
	con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
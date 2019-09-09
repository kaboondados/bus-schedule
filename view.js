var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydata"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM buses", function (err, result, fields) {
    if (err) throw err;
	console.log('Bus schedule:');
    console.log(result);
  });
  con.query("SELECT * FROM students", function (err, result, fields) {
    if (err) throw err;
	console.log('Students:');
    console.log(result);
  });
});

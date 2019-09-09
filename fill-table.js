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
  var sql = "INSERT INTO buses (num, origin, destination, departure, arrival) VALUES ?";
  var values = [
    [320, 'Chernogolovka', 'Moscow', '12:00:00', '13:00:00'],
    [320, 'Chernogolovka', 'Moscow', '15:00:00', '16:00:00'],
    [320, 'Chernogolovka', 'Moscow', '18:00:00', '19:00:00'],
    [320, 'Moscow', 'Chernogolovka', '12:00:00', '13:00:00'],
    [320, 'Moscow', 'Chernogolovka', '15:00:00', '16:00:00'],
    [320, 'Moscow', 'Chernogolovka', '18:00:00', '19:00:00'],
    [360, 'Dubrovo', 'Moscow', '10:00:00', '12:00:00'],
    [360, 'Dubrovo', 'Moscow', '14:00:00', '16:00:00'],
    [360, 'Dubrovo', 'Moscow', '18:00:00', '20:00:00'],
    [360, 'Moscow', 'Dubrovo', '10:00:00', '12:00:00'],
    [360, 'Moscow', 'Dubrovo', '14:00:00', '16:00:00'],
    [360, 'Moscow', 'Dubrovo', '18:00:00', '20:00:00'],
    [24, 'Chernogolovka', 'Noginsk', '11:00:00', '12:00:00'],
    [24, 'Noginsk', 'Chernogolovka', '11:00:00', '12:00:00']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  var sql2 = "INSERT INTO students (firstname, lastname, origin, arrival) VALUES ?";
  var values2 = [
    ['Ivanov', 'Ivan', 'Chernogolovka', '13:00:00'],
    ['Petrov', 'Petr', 'Dubrovo', '16:00:00'],
	['Kabenkov', 'Alexander', 'Moscow', null]
  ];
  con.query(sql2, [values2], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
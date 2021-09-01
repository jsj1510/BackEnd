var mysql      = require('mysql');
var dbpassword = require('../password.js')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : `${dbpassword.password}`,
  database : 'opentutorials',
  port: '3306'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});
 
connection.end();
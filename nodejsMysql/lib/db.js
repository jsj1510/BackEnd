var dbpassword = require('../password/password')
var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: `${dbpassword.password}`,
  database: 'opentutorials'
});

db.connect();

module.exports= db;
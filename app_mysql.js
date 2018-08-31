var express = require('express');
var app = express();
app.locals.pretty = true;

var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '<30706>',
  database : 'BP database'
});
conn.connect();

app.listen(3000, function(){
    console.log('Connected, 3000 port!');
  })

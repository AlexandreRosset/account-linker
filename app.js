var express = require('express');
var router = require('./web/index.js');
var bodyParser = require('body-parser');
require("./config");


var app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.all(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "facebook.com");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', require('./web'));


var port = process.env.PORT || 1111;


app.listen(port, function () {
  console.log(`App running on port: ${port}`);
});

require('./config/config.js');
const express = require('express');
const app = express();
var api = "/api/";
var bodyParser = require("body-parser");

var usuario_router_1 = require("./routes/usuario.router");
var mysql_1 = require("./mysql/mysql");

mysql_1.default.getInstance();

app.get('/', function (req, res) {
  res.json('Hello World!');
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  if (req.methods == "OPTIONS") {
      res.sendStatus(200);
  }
  else {
      next();
  }
});

/**
 * BODY PARSER
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * ROUTER
 */
app.use(api, usuario_router_1.default);

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port! ', process.env.PORT);
});

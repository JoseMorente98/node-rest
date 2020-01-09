require('./config/config.js');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.json('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port! ', process.env.PORT);
});

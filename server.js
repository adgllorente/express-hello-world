'use strict';

var express = require('express'),
  app = express(),
  IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, IP_ADDRESS, function () {
  console.log('Example app listening on port', PORT);
});

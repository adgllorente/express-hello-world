'use strict';

var express = require('express'),
  app = express(),
  IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  PORT = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8000;

app.use('/', express.static(__dirname + '/static'));

app.listen(PORT, IP_ADDRESS, function () {
  console.log('Example app listening on port', PORT);
});

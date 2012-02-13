var express = require('express');
var mongodb = require('./db');
var fs = require('fs');
var util = require('util');

var app = express.createServer();

// App middleware or configuration.
app.configure('development', function() {
  app.use(express.logger());
  app.use(express.static(__dirname + '/public'));
});

// Handler for default path.
app.get('/', function(req, res) {
  // Currently, we are stream htm to output.
  var streamIn = fs.createReadStream(__dirname + '/public/index.htm');
  util.pump(streamIn, res);
});

// Handler for contacts.
app.get('/contacts/', function(req, res) {
  // Return list of contacts in json.
  var c = mongodb.getContacts();
  console.log(c);
  res.json(c);
});

app.get('/contact/:id/:operation?', function(req, res) {
  // Perform action on a specific contact. e.g. add, edit, update, remove.
});

app.listen(2012);

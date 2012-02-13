var contacts = require('./db');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Node is running.\n'); 
  var c = contacts.getContacts();
var a = accounts.getAccounts();
  //console.log(c);

  res.end('Done running.');
}).listen(2012, 'LOCALHOST');

console.log('Server running at http://127.0.0.1:2012');

var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var twispdb = new mongodb.Db('testdb', server);

var buffer;

exports.getContacts = function() {
  twispdb.open(function(err, twispdb) {
    twispdb.collection('contact', function(err, contacts) {
      contacts.find(function(err, cursor) {
        cursor.toArray(function(err, docs) {
          buffer = docs;
        });
      });
    });
  });
  //console.log('In db.js ' + buffer); 
  return buffer;
};



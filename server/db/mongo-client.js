'use strict';
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

import mongoose from 'mongoose';

mongoose.Promise = Promise;

let db = mongoose.createConnection("mongodb://mongodb:27017")
console.log("STATE MONGOOSE", mongoose.connection.readyState == 1);
db.on('connected', function () {
  console.log('Mongoose default connection open to mongodb://mongodb:27017' );
});

// If the connection throws an error
db.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

export default db;

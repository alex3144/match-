'use strict';
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

import mongoose from 'mongoose';

mongoose.Promise = Promise;
let url = "mongodb://mongodb:27017"
if(process.env.NODE_ENV === "development_docker") {
  url = "mongodb://mongodb:27017"
}
const db = mongoose.createConnection(url)
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

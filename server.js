require('dotenv').config();
var Hapi = require('hapi');
var mongoose = require('mongoose');
//TODO See Relative directory, good for images directory
var server = new Hapi.Server();

server.connection({
  port: process.env.APP_PORT
});

var db = mongoose.connect('mongodb://localhost/dagumMaximum');

var plugins = [
  { register: require('inert') },
  { register: require('./lib/modules/login/index.js') },
  { register: require('./lib/modules/images/index.js') }  
];

server.register(plugins, function (err) {
  if (err) {
    throw err;
  }
});

server.start();

console.log('Listening on ' + process.env.APP_PORT);

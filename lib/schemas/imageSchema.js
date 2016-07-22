var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userSchema');

var imageSchema = new Schema({
  path:{
		type: String
  }
});

module.exports = mongoose.model('Image', imageSchema);
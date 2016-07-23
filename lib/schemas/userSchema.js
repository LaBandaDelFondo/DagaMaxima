var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = require('./imageSchema');

var userSchema = new Schema({
  userID: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }]
    
});

module.exports = mongoose.model('User', userSchema);

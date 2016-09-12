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
  email: {
    type: String
  },
  ageRange: {
    type: String
  },
  verified: {
    type: String
  },
  location: {
    type: String
  },
  education: {
    type: String
  },
  workPositionName: {
    type: String
  },
  workEmployerName: {
    type: String
  },
  picture: {
    type: String
  },
  about: {
    type: String
  },
  admissionDate: {
    type: String
  },
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }]
    
});

module.exports = mongoose.model('User', userSchema);

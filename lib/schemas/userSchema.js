var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = require('./imageSchema');
var Publication = require('./publicationSchema');

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
  }],
  publications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publication'
  }]

});

module.exports = mongoose.model('User', userSchema);

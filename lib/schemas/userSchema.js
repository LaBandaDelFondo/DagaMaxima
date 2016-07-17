var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userSchema = new Schema({
  userID: {
    type: String,
    unique: true
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);

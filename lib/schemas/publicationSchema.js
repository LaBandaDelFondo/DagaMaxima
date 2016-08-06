var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = require('./imageSchema');
var User = require('./userSchema');

var publicationSchema = new Schema({

  description: { type: String, default:""},
  
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  images: [{ type: mongoose.Schema.Types.ObjectId,  ref: 'Image'  }],

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

  date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Publication', publicationSchema);
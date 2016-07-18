var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userSchema');

var imageSchema = new Schema({
	image:{
	  data: Buffer,
    contentType: String
	},
	uploadedBy:{
		type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
	}
});

module.exports = mongoose.model('Image', imageSchema);
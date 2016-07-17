var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
    User = require('userSchema');

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

module.exports = mongoose.model('image', imageSchema);
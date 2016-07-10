var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	username:{
	    type: String
	},
	facebookToken:{
		type: String,
        unique: true
	}
});

module.exports = mongoose.model('User', userSchema);
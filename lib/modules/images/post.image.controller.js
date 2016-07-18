var Image = require('../../schemas/imageSchema');
var User = require('../../schemas/userSchema');
module.exports = function(request, reply) {

  var image = new Image(request.payload);
  var user = image.uploadedBy;

  User.findOne({
    userID: user.userID
  }, function(err, doc) {
    if (err) {
      throw err;
    } else if (doc) {
      image.save();
      reply('User exists, uploading image');
    } else {
      reply('User does not exist!');
    }
  });
}

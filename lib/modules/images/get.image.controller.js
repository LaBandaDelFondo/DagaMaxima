var Image = require('../../schemas/imageSchema');
var User = require('../../schemas/userSchema');

module.exports = function (request, reply) {
  var userID = request.params.userID;

  User.findOne({
    userID: userID
  })
    .populate({
      path: 'images',
      select: 'name -_id'
    })
    .exec(function (err, user) {
      if (err) {
        throw err;
      }
      reply(user.images);
    });
}
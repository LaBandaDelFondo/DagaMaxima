var User = require('../../schemas/userSchema');
var Boom = require('boom');

module.exports = function (request, reply) {
  var userID = request.params.userID;

  User.findOne({
    userID: userID
  }, function (err, user) {
    if (err) {
      return reply(Boom.badRequest(err.message));
    }
    if (!user) {
      return reply(Boom.notFound('User ' + userID + ' not found.'));
    }
    reply(user.publications).code(200);
  });
}
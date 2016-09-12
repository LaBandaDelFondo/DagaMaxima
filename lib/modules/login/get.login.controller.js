var User = require('../../schemas/userSchema');

module.exports = function(request, reply) {

  User.findOne({
    userID: request.params.userID
  }, function(err, user) {
    if (err) {
      throw err;
    } else if (user) {
      reply(user);
    } else {
      reply('User not found');
    }
  });
};

var User = require('../../schemas/userSchema');
module.exports = function (request, reply) {

  var user = new User(request.payload);

  User.findOne({
    userID: user.userID
  }, function (err, doc) {
    if (err) {
      throw err;
    } else if (doc) {
      reply('User exists ' + doc.name);
    } else {
      user.save();
      reply('User created ' + user.name);
    }
  });
}

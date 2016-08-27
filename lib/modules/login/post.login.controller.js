var User = require('../../schemas/userSchema');
module.exports = function (request, reply) {
  var user = new User(request.payload);
  User.findOne({
    userID: user.userID
  }, function (err, doc) {
    if (err) {
      throw err;
    } else if (doc) {
      reply('User exists ' + doc.name).code(200);
    } else {
      user.save(function (err) {
        if (err) {
          console.log('Error while creating user on login' + err);
        }
      });
      reply('User created ' + user.name).code(201);
    }
  });
}

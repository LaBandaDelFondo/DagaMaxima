var User = require('../../schemas/userSchema');
var Boom = require('boom');

module.exports = function (request, reply) {
  var userID = request.params.userID;

    User.findOne({ userID: userID })
    .populate({
              path:'publications',
              select: '-_id',
              populate: {
                path:'images',
                select: 'path -_id'
              } 
            })
    .exec(function (err, user) {
      if (!user) {
        return reply(Boom.notFound('User ' + userID + ' not found.'));
      }
      reply(user.publications).code(200);
    });
}
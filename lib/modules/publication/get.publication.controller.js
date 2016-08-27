var Publication = require('../../schemas/publicationSchema');
var Boom = require('boom');

module.exports = function (request, reply) {
  var publicationID = request.params.publicationID;

  Publication.findOne({_id: publicationID})
  .populate({
      path: 'images',
      select: '-_id'
  })
  .exec(function (err, publication) {
    if (err) {
      return reply(Boom.badRequest(err.message));
    }
    if (!publication) {
      return reply(Boom.notFound('User ' + userID + ' not found.'));
    }
    

  });
}
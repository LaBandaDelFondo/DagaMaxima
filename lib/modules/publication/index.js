var publicationRoutes = require('./publication.routes');

exports.register = function (server, options, next) {
  server.route(publicationRoutes);
  next();
};

exports.register.attributes = {
  name: 'publicationModule',
  version: '0.1.0'
};

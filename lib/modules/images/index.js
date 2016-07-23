var imageRoutes = require('./image.routes');

exports.register = function(server, options, next) {
  server.route(imageRoutes);
  next();
};

exports.register.attributes = {
  name: 'imageModule',
  version: '0.1.0'
};

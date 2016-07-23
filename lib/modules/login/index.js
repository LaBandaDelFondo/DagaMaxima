var loginRoutes = require('./login.routes');

exports.register = function (server, options, next) {
  server.route(loginRoutes);
  next();
};

exports.register.attributes = {
  name: 'loginModule',
  version: '0.1.0'
};
